import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SortDirectionIcon from '../../../../components/icons/SortDirectionIcon';
import ReactSelect from 'react-select';
import { IOptionInterface } from '../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';

interface UpworkScoreHeaderProps {
    id: string;
    scoresOptions: IOptionInterface[];
}

const UpworkScoreHeader: FC<UpworkScoreHeaderProps> = ({ id, scoresOptions }) => {
    return (
        <Grid container direction="column" gap={4}>
            <Grid item>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>{id}</Typography>
                    <SortDirectionIcon />
                </Box>
            </Grid>
            <Grid item>
                <ReactSelect options={scoresOptions} />
            </Grid>
        </Grid>
    );
};

export default UpworkScoreHeader;
