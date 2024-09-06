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
    });
};

export const AppThemeLight = createAppTheme(ITheme.LIGHT);
export const AppThemeDark = createAppTheme(ITheme.DARK);
