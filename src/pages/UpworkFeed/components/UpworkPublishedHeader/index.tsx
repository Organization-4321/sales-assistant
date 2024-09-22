import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import SortDirectionIcon from '../../../../components/icons/SortDirectionIcon';
import CustomDatePicker from '../../../../components/UI/CustomDatePicker';

interface UpworkPublishedHeaderProps {
    title: string;
}

const UpworkPublishedHeader: FC<UpworkPublishedHeaderProps> = ({ title }) => {
    return (
        <Box display="flex" flexDirection="column" gap={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle2">{title}</Typography>
                <SortDirectionIcon />
            </Box>
            <CustomDatePicker />
        </Box>
    );
};

export default UpworkPublishedHeader;
