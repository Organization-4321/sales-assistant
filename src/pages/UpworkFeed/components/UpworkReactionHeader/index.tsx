import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { IOptionInterface } from '../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import CustomSelect from '../../../../components/UI/CustomSelect';
import SortDirectionIcon from '../../../../components/icons/SortDirectionIcon';

interface UpworkReactionHeaderProps {
    title: string;
    options: IOptionInterface[];
    selectedOptions: IOptionInterface[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
}

const UpworkReactionHeader: FC<UpworkReactionHeaderProps> = ({
    title,
    options,
    selectedOptions,
    setSelectedOptions,
}) => {
    return (
        <Box display="flex" flexDirection="column" gap={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle2">{title}</Typography>
                <SortDirectionIcon />
            </Box>
            <CustomSelect
                options={options}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
        </Box>
    );
};

export default UpworkReactionHeader;
