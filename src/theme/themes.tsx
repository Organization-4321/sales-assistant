import { createTheme } from '@mui/material/styles';
import { ITheme } from './types';
import AlertSuccessIcon from '../components/icons/alerts/AlertSuccessIcon';
import AlertErrorIcon from '../components/icons/alerts/AlertErrorIcon';
import AlertWarningIcon from '../components/icons/alerts/AlertWarningIcon';
import AlertInfoIcon from '../components/icons/alerts/AlertInfoIcon';

const baseTypography = {
    fontFamily: 'Poppins, sans-serif',
};

const createAppTheme = (mode: ITheme) => {
    const isDarkMode = mode === 'dark';

    const theme = createTheme({
        typography: baseTypography,
        borders: { thin: `1px solid ${isDarkMode ? '#414752' : '#d5d7db'}` },
    });

    return createTheme(theme, {
        palette: {
            mode,
            primary: {
                main: isDarkMode ? '#131314' : '#0f62fe',
            },
            background: {
                default: isDarkMode ? '#181a1f' : '#f6f7f8',
                paper: isDarkMode ? '#131314' : '#fff',
            },
            text: {
                primary: isDarkMode ? '#ebecf0' : '#252733',
                primaryReversed: isDarkMode ? '#252733' : '#ebecf0',
                secondary: isDarkMode ? '#fff' : '#131314',
            },
            customGray: {
                light: '#70737a',
                medium: isDarkMode ? '#c9ced6' : '#414752',
            },
            customBlue: {
                main: isDarkMode ? '#5b94fe' : '#0f62fe',
            },
            borderColors: {
                main: isDarkMode ? '#414752' : '#d5d7db',
                secondary: isDarkMode ? '#70737a' : '#b0b3b8',
            },
        },
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'outlined',
                },
                styleOverrides: {
                    root: {
                        padding: theme.spacing(1, 2),
                        borderRadius: theme.spacing(1),
                        textTransform: 'initial',
                        fontSize: theme.spacing(2),
                        fontWeight: '500',
                    },
                    outlined: {
                        border: `2px solid ${isDarkMode ? '#3760ad' : '#abbde0'}`,
                        color: isDarkMode ? '#ebecf0' : '#252733',
                        backgroundColor: isDarkMode ? '#131314' : '#fff',
                        '&:hover': {
                            border: `2px solid ${isDarkMode ? '#3760ad' : '#abbde0'}`,
                            backgroundColor: isDarkMode ? '#181b29' : '#f0f5ff',
                        },
                        '&:focus': {
                            borderColor: isDarkMode ? '#3760ad' : '#abbde0',
                            backgroundColor: isDarkMode ? '#3760ad' : '#abbde0',
                        },
                    },
                    contained: {
                        backgroundColor: isDarkMode ? '#5b94fe' : '#0f62fe',
                        color: isDarkMode ? '#131314' : '#fff',
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
            MuiAlert: {
                styleOverrides: {
                    root: {
                        borderRadius: '8px',
                        padding: '8px 12px',
                        color: isDarkMode ? '#fff' : '#131314',
                    },
                    standardSuccess: {
                        backgroundColor: isDarkMode ? '#2b3d2b' : '#dcf2dc',
                    },
                    standardError: {
                        backgroundColor: isDarkMode ? '#3d2b2e' : '#fae1e5',
                    },
                    standardWarning: {
                        backgroundColor: isDarkMode ? '#4d4536' : '#fae9c8',
                    },
                    standardInfo: {
                        backgroundColor: isDarkMode ? '#2b373d' : '#dcedf5',
                    },
                },
                defaultProps: {
                    iconMapping: {
                        success: isDarkMode ? (
                            <AlertSuccessIcon fill="#57ad57" />
                        ) : (
                            <AlertSuccessIcon fill="#187a18" />
                        ),
                        error: isDarkMode ? (
                            <AlertErrorIcon fill="#c67" />
                        ) : (
                            <AlertErrorIcon fill="#c02" />
                        ),
                        warning: isDarkMode ? (
                            <AlertWarningIcon fill="#f9ac64" />
                        ) : (
                            <AlertWarningIcon fill="#f9902d" />
                        ),
                        info: isDarkMode ? (
                            <AlertInfoIcon fill="#52a3cc" />
                        ) : (
                            <AlertInfoIcon fill="#1f7099" />
                        ),
                    },
                },
            },
            MuiAlertTitle: {
                styleOverrides: {
                    root: {
                        fontWeight: 600,
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        padding: theme.spacing(1),
                        color: isDarkMode ? '#c9ced6' : '#414752',
                        verticalAlign: 'top',
                    },
                    body: {
                        padding: theme.spacing(2, 1.5),
                        borderTop: `1px solid ${isDarkMode ? '#414752' : '#d5d7db'}`,
                        borderBottom: `1px solid ${isDarkMode ? '#414752' : '#d5d7db'}`,
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        color: isDarkMode ? '#fff' : '#0e0e0f',
                        backgroundColor: isDarkMode ? '#252733' : '#ebecf0',
                        fontSize: '0.875rem',
                    },
                },
            },
            MuiFormControlLabel: {
                styleOverrides: {
                    root: {
                        margin: 0,
                    },
                    label: {
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        color: isDarkMode ? '#fff' : '#0e0e0f',
                    },
                },
            },
            MuiCheckbox: {
                styleOverrides: {
                    root: {
                        paddingTop: theme.spacing(1.5),
                        paddingBottom: theme.spacing(1.5),
                        paddingRight: theme.spacing(1),
                        paddingLeft: theme.spacing(0.25),
                        '& .MuiSvgIcon-root': {
                            color: '#B0B3B8',
                        },
                        '&.Mui-checked .MuiSvgIcon-root': {
                            color: '#0f62fe',
                        },
                    },
                },
            },
            MuiPaginationItem: {
                styleOverrides: {
                    root: {
                        border: 'none',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: isDarkMode ? '#fff' : '#131314',
                        padding: '12px 10px',
                        minWidth: '36px',
                        minHeight: '48px',
                    },

                    outlined: {
                        '&.Mui-selected': {
                            border: `2px solid ${isDarkMode ? '#3760ad' : '#abbde0'}`,
                            borderRadius: '4px',
                            background: isDarkMode ? '#131314' : '#fff',
                        },
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    subtitle2: {
                        color: isDarkMode ? '#c9ced6' : '#4d4d4d',
                        fontWeight: 600,
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        background: isDarkMode ? '#131314' : '#fff',
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: theme.spacing(1),
                        '& fieldset': {
                            border: `1px solid ${isDarkMode ? '#70737a' : '#b0b3b8'}`,
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {},
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            boxShadow: '0 0 0 1px #0f62fe',
                            border: `1px solid ${isDarkMode ? '#5b94fe' : '#0f62fe'}`,
                        },
                    },
                },
            },
            MuiFilledInput: {
                defaultProps: {
                    disableUnderline: true,
                },
                styleOverrides: {
                    root: {
                        background: isDarkMode ? '#131314' : '#fff',
                        border: `1px solid ${isDarkMode ? '#70737a' : '#b0b3b8'}`,
                        borderRadius: '8px',
                        '&.Mui-focused': {
                            background: isDarkMode ? '#131314' : '#fff',
                            border: `1px solid ${isDarkMode ? '#5b94fe' : '#0f62fe'}`,
                            boxShadow: '0 0 0 1px #0f62fe',
                        },
                        '&:hover:not(.Mui-focused)': {
                            background: isDarkMode ? '#131314' : '#fff',
                            border: `1px solid ${isDarkMode ? '#fff' : '#131314'}`,
                        },
                    },
                    input: {
                        color: isDarkMode ? '#fff' : '#131314',
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    filled: {
                        color: isDarkMode ? '#8b8e94' : '#8a8d94',
                        '&.Mui-focused': {
                            color: isDarkMode ? '#b0b3b8' : '#70737a',
                        },
                    },
                },
            },
        },
    });
};

export const AppThemeLight = createAppTheme(ITheme.LIGHT);
export const AppThemeDark = createAppTheme(ITheme.DARK);
