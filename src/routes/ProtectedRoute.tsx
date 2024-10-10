import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Navigate, Outlet } from 'react-router-dom';
import { APP_ROUTES } from './app-routes.enum';

const ProtectedRoute: FC = () => {
    const { user } = useSelector((state: RootState) => state.currentUser);

    return user ? <Outlet /> : <Navigate to={APP_ROUTES.LOGIN} replace />;
};

export default ProtectedRoute;
