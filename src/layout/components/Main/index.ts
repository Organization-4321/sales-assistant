import { styled } from '@mui/material';

const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})<{
    open?: boolean;
    drawerWidth: number;
}>(({ theme, drawerWidth }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    [theme.breakpoints.up('xs')]: {
        padding: theme.spacing(0, 3),
    },
    [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(0, 4),
    },
    variants: [
        {
            props: ({ open }) => open,
            style: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            },
        },
    ],
}));

export default Main;
