import { FC } from 'react';
import { components, DropdownIndicatorProps } from 'react-select';
import ArrowIconLeft from '../../../../icons/ArrowIconLeft';
import { useAppTheme } from '../../../../../theme';
import { ITheme } from '../../../../../theme/types';

const CustomSelectDropdownIndicator: FC<DropdownIndicatorProps> = (props) => {
    const theme = useAppTheme();

    return (
        <components.DropdownIndicator {...props}>
            <ArrowIconLeft
                sx={{
                    width: '16px',
                    height: '16px',
                    transform: 'rotate(-90deg)',
                    color: theme.themeName === ITheme.DARK ? '#ebecf0' : '#333333',
                }}
            />
        </components.DropdownIndicator>
    );
};

export default CustomSelectDropdownIndicator;
