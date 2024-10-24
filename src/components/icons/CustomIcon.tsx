import { SvgIcon, SvgIconProps, useTheme } from '@mui/material';
import { FC } from 'react';

type CustomIconProps = {
    path: string;
    color?: string;
} & SvgIconProps;

const CustomIcon: FC<CustomIconProps> = ({ path, fill, ...props }) => {
    const theme = useTheme();

    return (
        <SvgIcon {...props}>
            <path d={path} fill={fill || theme.palette.text.primary} />
        </SvgIcon>
    );
};

export default CustomIcon;
