import { createBrowserRouter } from 'react-router-dom';
import Auth from '../pages/Auth';
import UpworkFeed from '../pages/UpworkFeed';
import { APP_ROUTES } from './app-routes.enum';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
    {
        path: APP_ROUTES.LOGIN,
        element: <Auth />,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: APP_ROUTES.UPWORK_FEED,
                element: <UpworkFeed />,
            },
        ],
    },
]);

export default router;
