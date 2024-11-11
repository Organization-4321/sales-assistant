import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './queries';
import { IApiResponseGenericDTO } from '../interfaces-submodule/interfaces/dto/common/iapi-response.interface';
import { MessagesRoutesEnum } from '../interfaces-submodule/enums/routes/messages-routes.enum';
import { IMessageDTO } from '../interfaces-submodule/interfaces/dto/message/imessage-dto';
import AuthTokensService from '../services/AuthTokensService';
import { io, Socket } from 'socket.io-client';

const chatMessagesApi = createApi({
    reducerPath: MessagesRoutesEnum.BasePrefix,
    baseQuery: baseQueryWithReauth(MessagesRoutesEnum.BasePrefix),
    endpoints: (builder) => ({
        getMessagesByChatId: builder.query<IApiResponseGenericDTO<IMessageDTO[]>, string>({
            query: (chatId) => ({ url: chatId }),
            async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
                const socket: Socket = io(
                    import.meta.env.VITE_BASE_API_URL + MessagesRoutesEnum.Subscribe,
                    {
                        query: {
                            chatId: arg,
                        },
                        auth: {
                            token: AuthTokensService.getAccessToken(),
                        },
                    },
                );
                socket.connect();

                try {
                    await cacheDataLoaded;

                    socket.on('connect', () => {
                        console.log('Socket.IO connection opened');
                    });

                    socket.on('chatMessage', (message: IMessageDTO) => {
                        console.log(message);
                        updateCachedData((draft) => {
                            draft.data.push(message);
                        });
                    });
                } catch (error) {
                    console.error('Socket.IO connection error:', error);
                }

                await cacheEntryRemoved;
                socket.disconnect();
            },
        }),
        subscribeToChatResponses: builder.query<
            IApiResponseGenericDTO<IMessageDTO[]>,
            { chatId: number }
        >({
            query: ({ chatId }) => ({
                url: MessagesRoutesEnum.Subscribe,
                method: 'POST',
                body: { chatId, accessToken: AuthTokensService.getAccessToken() },
            }),
        }),
    }),
});

export const { useGetMessagesByChatIdQuery, useSubscribeToChatResponsesQuery } = chatMessagesApi;

export default chatMessagesApi;
