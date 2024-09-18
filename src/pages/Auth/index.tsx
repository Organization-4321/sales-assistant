import { FC } from 'react';
import { Grid, Stack } from '@mui/material';
import { useAppTheme } from '../../theme';
import AuthForm from './components/AuthForm';
import AuthFormTitles from './components/AuthFormTitles';

interface AuthProps {}

const Auth: FC<AuthProps> = ({}) => {
    const { themeName } = useAppTheme();

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
