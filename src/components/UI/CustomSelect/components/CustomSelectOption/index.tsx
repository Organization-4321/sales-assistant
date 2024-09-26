import { FC } from 'react';
import { Checkbox } from '@mui/material';
import { components, OptionProps } from 'react-select';

interface ICustomSelectOptionProps extends OptionProps {
    isAllSelected: boolean;
}

const CustomSelectOption: FC<ICustomSelectOptionProps> = (props) => {
    const { onMouseMove, onMouseOver, ...rest } = props.innerProps;
    const newProps = { ...props, innerProps: rest };

    const { isSelected, isAllSelected } = props;

    return (
        <components.Option {...newProps}>
            <Checkbox checked={isSelected || isAllSelected} name={props.label} />
            {props.children}
        </components.Option>
    );
};

export default CustomSelectOption;
