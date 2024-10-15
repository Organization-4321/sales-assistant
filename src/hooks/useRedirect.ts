import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { RootState } from '../store';
import { APP_ROUTES } from '../routes/app-routes.enum';

const useRedirect = () => {
    const { user } = useSelector((state: RootState) => state.currentUser);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (user && location.state) {
            navigate(location.state.from);
        } else if (user) {
            navigate(APP_ROUTES.UPWORK_FEED);
        }
    }, [location.pathname, user]);
};

export default useRedirect;
