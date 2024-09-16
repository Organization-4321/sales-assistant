import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './theme';
import Auth from './pages/Auth';
import { useRecoverUserQuery } from './api/accountApi';

function App() {
    useRecoverUserQuery();

    return (
        <ThemeContextProvider>
            <CssBaseline />
            <Auth />
        </ThemeContextProvider>
    );
}

export default App;
