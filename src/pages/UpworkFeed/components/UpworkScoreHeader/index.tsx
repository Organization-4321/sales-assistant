import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SortDirectionIcon from '../../../../components/icons/SortDirectionIcon';
import { IOptionInterface } from '../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import CustomSelect from '../../../../components/UI/CustomSelect';

interface UpworkScoreHeaderProps {
    title: string;
    scoresOptions: IOptionInterface[];
    selectedOptions: IOptionInterface[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
}

const UpworkScoreHeader: FC<UpworkScoreHeaderProps> = ({
    title,
    scoresOptions,
    selectedOptions,
    setSelectedOptions,
}) => {
    return (
        <Grid container direction="column" gap={4}>
            <Grid item>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle2">{title}</Typography>
                    <SortDirectionIcon />
                </Box>
            </Grid>
            <Grid item>
                <CustomSelect
                    options={scoresOptions}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                />
            </Grid>
        </Grid>
    );
};

export default UpworkScoreHeader;
