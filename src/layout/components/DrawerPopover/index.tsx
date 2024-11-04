import { FC } from 'react';
import CustomPopover from '../../../components/UI/CustomPopover';
import { PopoverProps } from '@mui/material';

interface DrawerPopoverProps extends PopoverProps {}

const DrawerPopover: FC<DrawerPopoverProps> = ({ children, sx, ...props }) => {
    return (
        <CustomPopover
            sx={{
                ...sx,
                '& .MuiPopover-paper': {
                    width: 288,
                    px: 0,
                },
            }}
            {...props}>
            {children}
        </CustomPopover>
    );
};

export default DrawerPopover;
