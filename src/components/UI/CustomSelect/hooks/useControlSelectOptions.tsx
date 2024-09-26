import { useState } from 'react';
import { IOptionInterface } from '../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';

const useControlSelectOptions = (
    options: IOptionInterface[],
    selectedOptions: IOptionInterface[],
    setSelectedOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>,
) => {
    const [allOptionsSelected, setAllOptionsSelected] = useState(
        selectedOptions.length === options.length,
    );

    const handleChangeSelectedOptions = (newValue: IOptionInterface[]) => {
        if (newValue.length === options.length) setAllOptionsSelected(true);
        else setAllOptionsSelected(false);

        setSelectedOptions(newValue);
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
