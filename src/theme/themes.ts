import { createTheme } from '@mui/material';

const baseTypography = {
    fontFamily: 'Poppins, sans-serif',
};

export const AppThemeLight = createTheme({
    palette: {
        background: {
            default: '#f6f7f8',
        },
        text: {
            primary: '#252733',
        },
    },
    typography: baseTypography,
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
    typography: baseTypography,
});
