import { FC } from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import SortDirectionIcon from '../../../../components/icons/SortDirectionIcon';

interface UpworkTitleHeaderProps {
    title: string;
}

const UpworkTitleHeader: FC<UpworkTitleHeaderProps> = ({ title }) => {
    return (
        <Grid container direction="column" gap={4}>
            <Grid item>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>{title}</Typography>
                    <SortDirectionIcon />
                </Box>
            </Grid>
            <Grid item>
                <TextField fullWidth />
            </Grid>
        </Grid>
    );
};

export default UpworkTitleHeader;
