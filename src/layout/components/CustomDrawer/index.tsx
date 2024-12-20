import { FC } from 'react';
import { Divider, Drawer } from '@mui/material';
import DrawerFooter from './DrawerFooter';
import DrawerBody from './DrawerBody';
import useDisableBodyXScroll from '../../../hooks/useDisableBodyXScroll';

interface CustomDrawerProps {
    drawerWidth: number;
    isOpened: boolean;
}

const CustomDrawer: FC<CustomDrawerProps> = ({ drawerWidth, isOpened }) => {
    useDisableBodyXScroll(isOpened);

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={isOpened}>
            <DrawerBody />
            <Divider sx={{ marginTop: 'auto' }} />
            <DrawerFooter />
        </Drawer>
    );
};

export default CustomDrawer;
