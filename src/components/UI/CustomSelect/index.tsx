import { FC } from 'react';
import ReactSelect, { MultiValue, Props as SelectProps } from 'react-select';
import CustomSelectDropdownIndicator from './components/CustomSelectDropdownIndicator';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';

interface ICustomSelect extends SelectProps {
    selectedOptions: MultiValue<IOptionInterface[]>;
    setSelectedOptions: React.Dispatch<React.SetStateAction<MultiValue<IOptionInterface[]>>>;
}

const CustomSelect: FC<ICustomSelect> = ({ selectedOptions, setSelectedOptions, ...props }) => {
    const handleChangeSelectedOptions = (newValue: MultiValue<IOptionInterface[]>) => {
        setSelectedOptions(newValue);
    };

    return (
        <ReactSelect
            isMulti
            hideSelectedOptions={false}
            closeMenuOnSelect={false}
            components={{
                DropdownIndicator: CustomSelectDropdownIndicator,
                IndicatorSeparator: null,
                ClearIndicator: () => null,
                MultiValue: ({ index }) => {
                    return index === 0 ? `${selectedOptions.length} selected` : null;
                },
            }}
            onChange={(newValue) =>
                handleChangeSelectedOptions(newValue as MultiValue<IOptionInterface[]>)
            }
            isSearchable={false}
            styles={{
                option(base, props) {
                    return {};
                },
            }}
            filterOption={createFilter({ ignoreAccents: false })}
            {...props}
        />
    );
};

export default CustomSelect;
