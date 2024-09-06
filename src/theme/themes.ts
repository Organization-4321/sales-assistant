import { createTheme } from '@mui/material/styles';
import { ITheme } from './types';

const baseTypography = {
    fontFamily: 'Poppins, sans-serif',
};

const createAppTheme = (mode: ITheme) => {
    const isDarkMode = mode === 'dark';

    const theme = createTheme({
        typography: baseTypography,
    });

    return createTheme(theme, {
        palette: {
            mode,
            primary: {
                main: isDarkMode ? '#131314' : '#0f62fe',
            },
            background: {
                default: isDarkMode ? '#131314' : '#fff',
            },
            text: {
                primary: isDarkMode ? '#ebecf0' : '#252733',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(1.5),
                        border: `2px solid ${isDarkMode ? '#3760ad' : '#abbde0'}`,
                        color: isDarkMode ? '#ebecf0' : '#252733',
                        backgroundColor: isDarkMode ? '#131314' : '#fff',
                        textTransform: 'initial',
                        '&:hover': {
                            borderColor: isDarkMode ? '#3760ad' : '#abbde0',
                            backgroundColor: isDarkMode ? '#181b29' : '#f0f5ff',
                        },
                        '&:focus': {
                            borderColor: isDarkMode ? '#3760ad' : '#abbde0',
                            backgroundColor: isDarkMode ? '#3760ad' : '#abbde0',
                        },
                    },
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        '&::after': {
                            borderColor: isDarkMode ? '#414752' : '#d5d7db',
                        },
                        '&::before': {
                            borderColor: isDarkMode ? '#414752' : '#d5d7db',
                        },
                    },
                },
            },
        },
    });
};

export const AppThemeLight = createAppTheme(ITheme.LIGHT);
export const AppThemeDark = createAppTheme(ITheme.DARK);
