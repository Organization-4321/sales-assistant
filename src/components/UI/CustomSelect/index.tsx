import { FC } from 'react';
import ReactSelect, { createFilter, Props as SelectProps } from 'react-select';
import CustomSelectDropdownIndicator from './components/CustomSelectDropdownIndicator';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import CustomSelectOption from './components/CustomSelectOption';
import CustomSelectListWrapper from './components/CustomSelectListWrapper';
import useControlSelectOptions from './hooks/useControlSelectOptions';
import { useTheme } from '@emotion/react';
import { Theme } from '@mui/material';

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

    const {
        palette: { mode },
    } = useTheme() as Theme;

    return (
        <ReactSelect
            isMulti
            defaultValue={{}}
            hideSelectedOptions={false}
            closeMenuOnSelect={false}
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
                    return index === 0
                        ? selectedOptions.length === options.length
                            ? 'ALL'
                            : `${selectedOptions.length} selected`
                        : null;
                },
            }}
            onChange={(newValue) => handleChangeSelectedOptions(newValue as IOptionInterface[])}
            isSearchable={false}
            styles={{
                container: (base) => ({ ...base, minWidth: '124px' }),
                control: (base) => ({
                    ...base,
                    minHeight: '44px',
                    background: 'inherit',
                    color: mode === 'dark' ? '#fff' : '#131314',
                }),
                option: () => ({ width: 'max-content' }),
                menu: (base) => ({
                    ...base,
                    background: mode === 'dark' ? '#2b2b2b' : '#fff',
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
