import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { useAppTheme } from '../../theme';
import AuthForm from './components/AuthForm';

interface AuthProps {}

const Auth: FC<AuthProps> = ({}) => {
    const { themeName } = useAppTheme();

    return (
        <Box>
            <Grid container>
                <Grid
                    item
                    md="auto"
                    sx={{
                        width: { md: '440px' },
                        paddingX: { md: 7.5 },
                        paddingY: { md: 12 },
                    }}>
                    <AuthForm />
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
        </Box>
    );
};

export default Auth;
