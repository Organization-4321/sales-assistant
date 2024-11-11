import { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
    useGetMessagesByChatIdQuery,
    useSubscribeToChatResponsesQuery,
} from '../../api/chatMessagesApi';
import { Typography } from '@mui/material';

interface ChatPageProps {}

const ChatPage: FC<ChatPageProps> = ({}) => {
    const { id } = useParams();
    const { data: subscriptionData } = useSubscribeToChatResponsesQuery({ chatId: Number(id) });

    const { data } = useGetMessagesByChatIdQuery(id as string);
    const messages = data?.data || [];

    return (
        <>
            {messages.map((message) => (
                <Typography key={message.id} textAlign={message.isBot ? 'left' : 'right'}>
                    {message.content}
                </Typography>
            ))}
        </>
    );
};

export default ChatPage;
