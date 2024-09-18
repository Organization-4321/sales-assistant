import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import ReactSelect from 'react-select';
import { IOptionInterface } from '../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';

interface UpworkKeywordsHeaderProps {
    id: string;
    keywordsOptions: IOptionInterface[];
}

const UpworkKeywordsHeader: FC<UpworkKeywordsHeaderProps> = ({ id, keywordsOptions }) => {
    return (
        <Box display="flex" flexDirection="column" gap={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>{id}</Typography>
            </Box>
            <ReactSelect options={keywordsOptions} />
        </Box>
    );
};

export default UpworkKeywordsHeader;
