import { FC } from 'react';
import ReactSelect, { createFilter, Props as SelectProps } from 'react-select';
import CustomSelectDropdownIndicator from './components/CustomSelectDropdownIndicator';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import CustomSelectOption from './components/CustomSelectOption';
import CustomSelectListWrapper from './components/CustomSelectListWrapper';
import useControlSelectOptions from './hooks/useControlSelectOptions';

interface ICustomSelect extends SelectProps {
    options: IOptionInterface[];
    selectedOptions: IOptionInterface[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
}

const CustomSelect: FC<ICustomSelect> = ({
    options,
    selectedOptions,
    setSelectedOptions,
    ...props
}) => {
    const { allOptionsSelected, handleChangeSelectedOptions, handleToggleAllOptionsSelected } =
        useControlSelectOptions(options, selectedOptions, setSelectedOptions);

    return (
        <ReactSelect
            isMulti
            value={selectedOptions}
            hideSelectedOptions={false}
            closeMenuOnSelect={false}
            menuIsOpen
            components={{
                MenuList: (props) => (
                    <CustomSelectListWrapper
                        allOptionsSelected={allOptionsSelected}
                        handleToggleAllOptionsSelected={handleToggleAllOptionsSelected}
                        {...props}
                    />
                ),
                Option: (props) => (
                    <CustomSelectOption isAllSelected={allOptionsSelected} {...props} />
                ),
                DropdownIndicator: CustomSelectDropdownIndicator,
                IndicatorSeparator: null,
                ClearIndicator: () => null,
                MultiValue: ({ index }) => {
                    return index === 0 ? `${selectedOptions.length} selected` : null;
                },
            }}
            onChange={(newValue) => handleChangeSelectedOptions(newValue as IOptionInterface[])}
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
            options={options}
            {...props}
        />
    );
};

export default CustomSelect;
