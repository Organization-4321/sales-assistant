import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { APP_ROUTES } from './app-routes.enum';

const ProtectedRoute: FC = () => {
    const { user } = useSelector((state: RootState) => state.currentUser);
    const location = useLocation();

    return user ? (
        <Outlet />
    ) : (
        <Navigate to={APP_ROUTES.LOGIN} replace state={{ from: location.pathname }} />
    );
};

export default ProtectedRoute;
