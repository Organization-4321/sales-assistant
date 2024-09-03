import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { ITheme, IThemeContext } from './types';
import { Theme, ThemeProvider } from '@mui/material';
import { AppThemeDark, AppThemeLight } from './themes';

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [themeName, setThemeName] = useState<ITheme>(ITheme.LIGHT);
    const [theme, setTheme] = useState<Theme>(AppThemeLight);

    const changeTheme = (theme: ITheme) => {
        setThemeName(theme);

        switch (theme) {
            case ITheme.DARK:
                setTheme(AppThemeDark);
                break;
            case ITheme.LIGHT:
                setTheme(AppThemeLight);
                break;
            default:
                setTheme(AppThemeLight);
                break;
        }
    };

    return (
        <ThemeContext.Provider value={{ themeName, changeTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext must be used within a ThemeContextProvider');
    }
    return themeContext;
};
