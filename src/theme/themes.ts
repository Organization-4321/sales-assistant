import { createTheme } from '@mui/material';

export const AppThemeLight = createTheme({
    palette: {
        background: {
            default: '#f6f7f8',
        },
        text: {
            primary: '#252733',
        },
    },
});

export const AppThemeDark = createTheme({
    palette: {
        background: {
            default: '#131314',
        },
        text: {
            primary: '#ebecf0',
        },
    },
});
