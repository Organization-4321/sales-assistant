import { Grid, IconButton, Typography } from '@mui/material';
import { FC } from 'react';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import ArrowIconLeft from '../../../../icons/ArrowIconLeft';

const CustomDatePickerHeader: FC<ReactDatePickerCustomHeaderProps> = ({
    date,
    decreaseMonth,
    prevMonthButtonDisabled,
    increaseMonth,
    nextMonthButtonDisabled,
}) => {
    return (
        <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
                <IconButton onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                    <ArrowIconLeft sx={{ width: 16, height: 16 }} />
                </IconButton>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2">
                    {date.toLocaleString('EN-GB', { month: 'long' })} {date.getFullYear()}
                </Typography>
            </Grid>
            <Grid item>
                <IconButton onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                    <ArrowIconLeft sx={{ width: 16, height: 16, transform: 'rotate(-180deg)' }} />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default CustomDatePickerHeader;
