import { FC } from 'react';
import { Grid, Stack } from '@mui/material';
import { useAppTheme } from '../../theme';
import AuthForm from './components/AuthForm';
import AuthFormTitles from './components/AuthFormTitles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Navigate } from 'react-router-dom';
import { APP_ROUTES } from '../../routes/app-routes.enum';

interface AuthProps {}

const Auth: FC<AuthProps> = ({}) => {
    const { themeName } = useAppTheme();
    const { user } = useSelector((state: RootState) => state.currentUser);

    if (user) {
        return <Navigate to={APP_ROUTES.UPWORK_FEED} />;
    }

    return (
        <Grid container>
            <Grid
                item
                md="auto"
                sx={{
                    width: { md: '440px' },
                    paddingX: { md: 7.5 },
                    paddingY: { md: 12 },
                }}>
                <Stack direction="column">
                    <AuthFormTitles />
                    <AuthForm />
                </Stack>
            </Grid>
            <Grid
                item
                xs={12}
                md
                sx={{
                    backgroundImage: `url("/src/assets/images/auth-${themeName}-bg.jpg")`,
                    backgroundRepeat: `no-repeat`,
                    minHeight: '100vh',
                }}
            />
        </Grid>
    );
};

export default Auth;
