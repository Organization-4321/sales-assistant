import { FC } from 'react';
import { IOptionInterface } from '../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import CustomSelect from '../../../../components/UI/CustomSelect';

interface UpworkScoreHeaderProps {
    scoresOptions: IOptionInterface[];
    selectedOptions: IOptionInterface[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
}

const UpworkScoreHeader: FC<UpworkScoreHeaderProps> = ({
    scoresOptions,
    selectedOptions,
    setSelectedOptions,
}) => {
    return (
        <CustomSelect
            options={scoresOptions}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
        />
    );
};

export default UpworkScoreHeader;
