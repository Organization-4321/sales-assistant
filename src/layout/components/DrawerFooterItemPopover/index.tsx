import { FC } from 'react';
import DrawerPopover from '../DrawerPopover';
import SideMenuItem from '../SideMenuItem';
import { useAppDispatch } from '../../../store';
import { clearUser } from '../../../store/slices/currentUserSlice';
import LogoutIcon from '../../../components/icons/SideMenu/LogoutIcon';

interface DrawerFooterItemPopoverProps {
    anchorEl: SVGSVGElement | null;
    onClose: () => void;
    open: boolean;
}

const DrawerFooterItemPopover: FC<DrawerFooterItemPopoverProps> = ({ anchorEl, onClose, open }) => {
    const dispatch = useAppDispatch();

    return (
        <DrawerPopover
            anchorEl={anchorEl}
            onClose={onClose}
            open={open}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            sx={{
                top: -12,
            }}>
            <SideMenuItem
                label="Logout"
                onClick={() => dispatch(clearUser())}
                beforeIcon={<LogoutIcon />}
            />
        </DrawerPopover>
    );
};

export default DrawerFooterItemPopover;
