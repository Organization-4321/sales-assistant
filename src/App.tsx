import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './theme';
import Auth from './pages/Auth';

function App() {
    return (
        <ThemeContextProvider>
            <CssBaseline />
            <Auth />
        </ThemeContextProvider>
    );
}

export default App;
