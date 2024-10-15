import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { IOptionInterface } from '../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import CustomSelect from '../../../../components/UI/CustomSelect';
interface UpworkKeywordsHeaderProps {
    title: string;
    keywordsOptions: IOptionInterface[];
    selectedOptions: IOptionInterface[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
}

const UpworkKeywordsHeader: FC<UpworkKeywordsHeaderProps> = ({
    title,
    keywordsOptions,
    selectedOptions,
    setSelectedOptions,
}) => {
    return (
        <Box display="flex" flexDirection="column" gap={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle2">{title}</Typography>
            </Box>
            <CustomSelect
                options={keywordsOptions}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
        </Box>
    );
};

export default UpworkKeywordsHeader;
