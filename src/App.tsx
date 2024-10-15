import { CssBaseline, LinearProgress } from '@mui/material';
import { ThemeContextProvider } from './theme';
import { useRecoverUserQuery } from './api/accountApi';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
    const { isLoading } = useRecoverUserQuery();

    if (isLoading) {
        return <LinearProgress />;
    }

    return (
        <ThemeContextProvider>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeContextProvider>
    );
}

export default App;
