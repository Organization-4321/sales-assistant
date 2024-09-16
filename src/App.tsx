import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './theme';
import { useRecoverUserQuery } from './api/accountApi';

function App() {
    useRecoverUserQuery();

    return (
        <ThemeContextProvider>
            <CssBaseline />
        </ThemeContextProvider>
    );
}

export default App;
