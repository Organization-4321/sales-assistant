import { Popover, PopoverProps } from '@mui/material';
import { FC } from 'react';

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
                        border: `1px solid #d5d7db`,
                        padding: theme.spacing(1.5),
                        boxShadow: '0 4px 16px -2px rgba(0, 0, 0, 0.16)',
                    }),
                },
            }}
            {...props}>
            {children}
        </Popover>
    );
};

export default CustomPopover;
