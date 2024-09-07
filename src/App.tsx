import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from './theme';
import Auth from './pages/Auth';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <CssBaseline />
                <Auth />
            </ThemeContextProvider>
        </Provider>
    );
}

export default App;
