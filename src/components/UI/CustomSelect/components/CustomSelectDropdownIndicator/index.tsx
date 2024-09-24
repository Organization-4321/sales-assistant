import { FC } from 'react';
import { components, DropdownIndicatorProps } from 'react-select';
import ArrowIconLeft from '../../../../icons/ArrowIconLeft';

const CustomSelectDropdownIndicator: FC<DropdownIndicatorProps> = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <ArrowIconLeft sx={{ width: '16px', height: '16px', transform: 'rotate(-90deg)' }} />
        </components.DropdownIndicator>
    );
};

export default CustomSelectDropdownIndicator;
