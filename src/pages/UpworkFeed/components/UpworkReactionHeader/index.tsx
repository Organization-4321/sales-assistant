import { FC } from 'react';
import { IOptionInterface } from '../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import CustomSelect from '../../../../components/UI/CustomSelect';

interface UpworkReactionHeaderProps {
    options: IOptionInterface[];
    selectedOptions: IOptionInterface[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
}

const UpworkReactionHeader: FC<UpworkReactionHeaderProps> = ({
    options,
    selectedOptions,
    setSelectedOptions,
}) => {
    return (
        <CustomSelect
            options={options}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
        />
    );
};

export default UpworkReactionHeader;
