import { FC } from 'react';
import ReactSelect, { createFilter, MultiValue, Props as SelectProps } from 'react-select';
import CustomSelectDropdownIndicator from './components/CustomSelectDropdownIndicator';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import CustomSelectOption from './components/CustomSelectOption';
import CustomSelectList from './components/CustomSelectList';

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
            menuIsOpen
            components={{
                MenuList: CustomSelectList,
                Option: CustomSelectOption,
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
                container: (base) => ({ ...base, minWidth: '124px' }),
                control: (base) => ({ ...base, minHeight: '44px' }),
                option: () => ({ width: 'max-content' }),
                menu: (base) => ({
                    ...base,
                    minWidth: '240px',
                }),
            }}
            filterOption={createFilter({ ignoreAccents: false })}
            {...props}
        />
    );
};

export default CustomSelect;
