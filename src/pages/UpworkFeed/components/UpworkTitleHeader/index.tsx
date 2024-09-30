import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SortDirectionIcon from '../../../../components/icons/SortDirectionIcon';
import UpworkFeedInput from '../UpworkFeedInput';

interface UpworkTitleHeaderProps {
    title: string;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const UpworkTitleHeader: FC<UpworkTitleHeaderProps> = ({ title, inputValue, setInputValue }) => {
    return (
        <Grid container direction="column" gap={4}>
            <Grid item>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle2">{title}</Typography>
                    <SortDirectionIcon />
                </Box>
            </Grid>
            <Grid item>
                <UpworkFeedInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onClearIconClick={() => setInputValue('')}
                />
            </Grid>
        </Grid>
    );
};

export default UpworkTitleHeader;
