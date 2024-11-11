import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './queries';
import { ChatRoutes } from '../interfaces-submodule/enums/routes/chat-routes.enum';
import { IApiResponseGenericDTO } from '../interfaces-submodule/interfaces/dto/common/iapi-response.interface';
import { IChatItem } from '../interfaces-submodule/interfaces/dto/chat/dto/ichat-item';

const chatsApi = createApi({
    reducerPath: ChatRoutes.BasePrefix,
    baseQuery: baseQueryWithReauth(ChatRoutes.BasePrefix),
    endpoints: (builder) => ({
        getChats: builder.query<IApiResponseGenericDTO<IChatItem[]>, void>({
            query: () => ({ url: '/' }),
        }),
        getChatById: builder.query<IApiResponseGenericDTO<IChatItem[]>, string>({
            query: (chatId) => ({ url: chatId }),
        }),
    }),
});

export const { useGetChatsQuery, useGetChatByIdQuery } = chatsApi;

export default chatsApi;
