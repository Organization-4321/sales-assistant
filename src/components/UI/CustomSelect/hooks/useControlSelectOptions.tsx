import { useState } from 'react';
import { IOptionInterface } from '../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import { ActionMeta } from 'react-select';

const useControlSelectOptions = (
    options: IOptionInterface[],
    selectedOptions: IOptionInterface[],
    setSelectedOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>,
) => {
    const [allOptionsSelected, setAllOptionsSelected] = useState(false);

    const handleChangeSelectedOptions = (
        newValue: IOptionInterface[],
        actionMeta: ActionMeta<IOptionInterface>,
    ) => {
        if (!actionMeta || !actionMeta.option) return;

        const action = actionMeta.action;

        if (
            action === 'select-option' &&
            !selectedOptions.find(({ value }) => value === actionMeta.option?.value)
        ) {
            const newSelectedOptions = [...selectedOptions, actionMeta.option];
            setSelectedOptions(newSelectedOptions);
            if (options.length === newSelectedOptions.length) setAllOptionsSelected(true);
            return;
        } else if (
            action === 'deselect-option' &&
            !selectedOptions.find(({ value }) => value === actionMeta.option?.value)
        ) {
            const newSelectedOptions = [...selectedOptions, actionMeta.option];
            setSelectedOptions(newSelectedOptions);
            if (options.length === newSelectedOptions.length) setAllOptionsSelected(true);
            return;
        } else {
            const newSelectedOptions = selectedOptions.filter(
                ({ value }) => value !== actionMeta.option?.value,
            );
            setSelectedOptions(newSelectedOptions);
            setAllOptionsSelected(false);
        }
    };

    const handleToggleAllOptionsSelected = (
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean,
    ) => {
        setAllOptionsSelected(checked);
        if (checked) setSelectedOptions(options);
        else setSelectedOptions([]);
    };

    return {
        allOptionsSelected,
        setAllOptionsSelected,
        handleChangeSelectedOptions,
        handleToggleAllOptionsSelected,
    };
};

export default useControlSelectOptions;
