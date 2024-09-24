import { FC } from 'react';
import { Checkbox } from '@mui/material';
import { components, OptionProps } from 'react-select';

const CustomSelectOption: FC<OptionProps> = (props) => {
    const { onMouseMove, onMouseOver, ...rest } = props.innerProps;
    const newProps = { ...props, innerProps: rest };

    const { isSelected } = props;

    return (
        <components.Option {...newProps}>
            <Checkbox checked={isSelected} name={props.label} />
            {props.children}
        </components.Option>
    );
};

export default CustomSelectOption;
