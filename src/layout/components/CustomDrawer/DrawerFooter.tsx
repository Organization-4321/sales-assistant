import { Box, List } from '@mui/material';
import { FC } from 'react';
import SideMenuItem from '../SideMenuItem';
import { RootState } from '../../../store';
import ArrowRightIcon from '../../../components/icons/SideMenu/ArrowRightIcon';
import UserIcon from '../../../components/icons/SideMenu/UserIcon';
import NetworkIcon from '../../../components/icons/SideMenu/NetworkIcon';
import { useSelector } from 'react-redux';
import useSideMenuPopover from '../../hooks/useSideMenuPopover';
import DrawerFooterItemPopover from '../DrawerFooterItemPopover';

interface DrawerFooterProps {}

const DrawerFooter: FC<DrawerFooterProps> = ({}) => {
    const { user } = useSelector((state: RootState) => state.currentUser);

    const { anchorEl, handleClick, handleClose, open } = useSideMenuPopover();

    const DrawerFooterList = [
        { to: '/upwork-feed', label: 'Upwork Feed', beforeIcon: <NetworkIcon /> },
        {
            label: `${user?.firstName} ${user?.lastName}`,
            beforeIcon: <UserIcon />,
            afterIcon: (
                <ArrowRightIcon
                    onClick={(e) => handleClick(e, `${user?.firstName} ${user?.lastName}`)}
                />
            ),
        },
    ];

    return (
        <Box px={2} py={1.5}>
            <List>
                {DrawerFooterList.map((item) => (
                    <SideMenuItem key={item.label} {...item} />
                ))}
                <DrawerFooterItemPopover anchorEl={anchorEl} onClose={handleClose} open={open} />
            </List>
        </Box>
    );
};

export default DrawerFooter;
