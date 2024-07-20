export enum ITheme {
    DARK = 'dark',
    LIGHT = 'light',
}

export interface IThemeContext {
    themeName: ITheme;
    changeTheme: (theme: ITheme) => void;
}
