import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import SortDirectionIcon from '../../../../components/icons/SortDirectionIcon';
import CustomDatePicker from '../../../../components/UI/CustomDatePicker';

interface UpworkPublishedHeaderProps {
    title: string;
    date: Date | null;
    setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const UpworkPublishedHeader: FC<UpworkPublishedHeaderProps> = ({ title, date, setDate }) => {
    return (
        <Box display="flex" flexDirection="column" gap={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle2">{title}</Typography>
                <SortDirectionIcon />
            </Box>
            <CustomDatePicker selected={date} onChange={(date) => setDate(date)} />
        </Box>
    );
};

export default UpworkPublishedHeader;
