import { Palette, PaletteOptions, PaletteColor, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        borders: {
            thin: string;
        };
    }

    interface ThemeOptions {
        borders?: {
            thin?: string;
        };
    }

    interface Palette {
        customGray: {
            light: string;
            medium: string;
        };
        customBlue: {
            main: string;
        };
    }

    interface PaletteOptions {
        customGray?: {
            light?: string;
            medium?: string;
        };
        customBlue?: {
            main?: string;
        };
    }

    interface TypeText {
        primaryReversed: string;
    }

    interface PaletteOptions {
        text?: Partial<TypeText>;
    }
}
