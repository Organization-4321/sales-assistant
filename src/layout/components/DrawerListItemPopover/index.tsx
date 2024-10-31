import { FC } from 'react';
import DrawerPopover from '../DrawerPopover';
import SideMenuItem from '../SideMenuItem';
import EditIcon from '../../../components/icons/SideMenu/EditIcon';
import DeleteIcon from '../../../components/icons/SideMenu/DeleteIcon';

interface DrawerListItemPopoverProps {
    anchorEl: SVGSVGElement | null;
    onClose: () => void;
    open: boolean;
    onRenameClick?: () => void;
}

const DrawerListItemPopover: FC<DrawerListItemPopoverProps> = ({
    anchorEl,
    onClose,
    open,
    onRenameClick,
}) => {
    return (
        <DrawerPopover
            anchorEl={anchorEl}
            onClose={onClose}
            open={open}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{
                top: 12,
            }}>
            <SideMenuItem label="Rename" onClick={onRenameClick} beforeIcon={<EditIcon />} />
            <SideMenuItem label="Delete" beforeIcon={<DeleteIcon />} />
        </DrawerPopover>
    );
};

export default DrawerListItemPopover;
