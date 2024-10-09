import { FC } from 'react';
import { SvgIconProps } from '@mui/material';
import { useAppTheme } from '../../theme';
import { ITheme } from '../../theme/types';

const fillColors = {
    [ITheme.LIGHT]: '#B8B8B8',
    [ITheme.DARK]: '#70737A',
};

const SortDirectionIcon: FC<SvgIconProps> = (props) => {
    const { themeName } = useAppTheme();

    const fillColor = props.fill ? props.fill : fillColors[themeName];

    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path d="M6 12H8V13L5 16L2 13V12H4L4 6H6V12Z" fill={fillColor} />
            <path d="M10 4H8V3L11 0L14 3V4H12L12 10H10V4Z" fill={fillColor} />
        </svg>
    );
};

export default SortDirectionIcon;
