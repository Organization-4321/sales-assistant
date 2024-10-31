import { Popover, PopoverProps } from '@mui/material';
import { FC } from 'react';
import commonBoxShadow from '../../../theme/common/commonBoxShadow';

const CustomPopover: FC<PopoverProps> = ({ children, ...props }) => {
    return (
        <Popover
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            slotProps={{
                paper: {
                    sx: (theme) => ({
                        borderRadius: '12px',
                        border: theme.borders.thin,
                        padding: theme.spacing(1.5),
                        boxShadow: commonBoxShadow,
                        background: theme.palette.background.paper,
                    }),
                },
            }}
            {...props}>
            {children}
        </Popover>
    );
};

export default CustomPopover;
