import { Box, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import SortDirectionIcon from '../../../../components/icons/SortDirectionIcon';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface UpworkPublishedHeaderProps {
    id: string;
}

const UpworkPublishedHeader: FC<UpworkPublishedHeaderProps> = ({ id }) => {
    return (
        <Box display="flex" flexDirection="column" gap={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>{id}</Typography>
                <SortDirectionIcon />
            </Box>
            <DatePicker customInput={<TextField />} />
        </Box>
    );
};

export default UpworkPublishedHeader;
