import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './theme';
import { useRecoverUserQuery } from './api/accountApi';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
    useRecoverUserQuery();

    return (
        <ThemeContextProvider>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeContextProvider>
    );
}

export default App;
