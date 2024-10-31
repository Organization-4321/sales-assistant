import { FC } from 'react';
import { IconButton, Toolbar } from '@mui/material';
import ExpandMenuIcon from '../../../components/icons/SideMenu/ExpandMenuIcon';
import SwitchThemeIcon from '../../../components/icons/SideMenu/SwitchThemeIcon';
import { ITheme } from '../../../theme/types';
import HideMenuIcon from '../../../components/icons/SideMenu/HideMenuIcon';
import { useAppTheme } from '../../../theme';
import AppBar from './AppBar.styled';

interface CustomAppBarProps {
    isOpened: boolean;
    onToggle: () => void;
    drawerWidth: number;
}

const CustomAppBar: FC<CustomAppBarProps> = ({ isOpened, onToggle, drawerWidth }) => {
    const { themeName, changeTheme } = useAppTheme();

    return (
        <AppBar position="fixed" open={isOpened} drawerWidth={drawerWidth}>
            <Toolbar
                disableGutters
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 1,
                    px: 2.5,
                }}>
                <IconButton onClick={onToggle} sx={[isOpened && { display: 'none' }]}>
                    <ExpandMenuIcon />
                </IconButton>
                <IconButton onClick={onToggle} sx={[!isOpened && { display: 'none' }]}>
                    <HideMenuIcon />
                </IconButton>
                <IconButton
                    onClick={() =>
                        changeTheme(themeName === ITheme.LIGHT ? ITheme.DARK : ITheme.LIGHT)
                    }>
                    <SwitchThemeIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default CustomAppBar;
