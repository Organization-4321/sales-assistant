import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import useExpandBlock from '../hooks/useExpandBlock';
import CustomAppBar from './components/CustomAppBar';
import DrawerHeader from './components/DrawerHeader';
import CustomDrawer from './components/CustomDrawer';
import Main from './components/Main';
import { useMediaQuery, useTheme } from '@mui/material';

const Layout = () => {
    const { isExpanded, handleToggleExpanded } = useExpandBlock();

    const theme = useTheme();
    const drawerWidth = useMediaQuery(theme.breakpoints.up('sm')) ? 320 : 280;

    return (
        <Box sx={{ display: 'flex' }}>
            <CustomAppBar
                isOpened={isExpanded}
                onToggle={handleToggleExpanded}
                drawerWidth={drawerWidth}
            />
            <CustomDrawer drawerWidth={drawerWidth} isOpened={isExpanded} />
            <Main open={isExpanded} drawerWidth={drawerWidth}>
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
};

export default Layout;
