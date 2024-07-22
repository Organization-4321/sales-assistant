import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './theme';

function App() {
    return (
        <ThemeContextProvider>
            <CssBaseline />
        </ThemeContextProvider>
    );
}

export default App;
