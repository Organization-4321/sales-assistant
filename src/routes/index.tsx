import { createBrowserRouter } from 'react-router-dom';
import Auth from '../pages/Auth';
import UpworkFeed from '../pages/UpworkFeed';
import { APP_ROUTES } from './app-routes.enum';
import ProtectedRoute from './ProtectedRoute';
import VacancyPage from '../pages/Vacancy';
import Layout from '../layout';
import ChatPage from '../pages/ChatPage';

const router = createBrowserRouter([
    {
        path: APP_ROUTES.LOGIN,
        element: <Auth />,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: APP_ROUTES.UPWORK_FEED,
                        element: <UpworkFeed />,
                    },
                    {
                        path: APP_ROUTES.VACANCY,
                        element: <VacancyPage />,
                    },
                    {
                        path: APP_ROUTES.CHAT,
                        element: <ChatPage />,
                    },
                ],
            },
        ],
    },
]);

export default router;
