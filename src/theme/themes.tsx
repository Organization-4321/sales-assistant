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
                        borderRadius: theme.spacing(1),
                        border: `2px solid ${isDarkMode ? '#3760ad' : '#abbde0'}`,
                        color: isDarkMode ? '#ebecf0' : '#252733',
                        backgroundColor: isDarkMode ? '#131314' : '#fff',
                        textTransform: 'initial',
                        fontSize: theme.spacing(2),
                        fontWeight: 'bold',
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
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: theme.spacing(1),
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
                        padding: theme.spacing(2, 1.5),
                        color: isDarkMode ? '#c9ced6' : '#414752',
                        verticalAlign: 'top',
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
                    },
                },
            },
        },
    });
};

export const AppThemeLight = createAppTheme(ITheme.LIGHT);
export const AppThemeDark = createAppTheme(ITheme.DARK);
