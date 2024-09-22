import { FC } from 'react';
import DatePicker, { DatePickerProps } from 'react-datepicker';
import CustomDatePickerHeader from './components/CustomDatePickerHeader';
import CustomDatePickerContainer from './components/CustomDatePickerContainer';
import './custom-datepicker.css';
import { TextField } from '@mui/material';

type CustomDatePickerProps = DatePickerProps & {};

const CustomDatePicker: FC<CustomDatePickerProps> = ({}) => {
    return (
        <DatePicker
            customInput={
                <TextField
                    InputProps={{
                        sx(theme) {
                            return { height: theme.spacing(5.5) };
                        },
                    }}
                />
            }
            showPopperArrow={false}
            renderCustomHeader={(props) => <CustomDatePickerHeader {...props} />}
            calendarContainer={CustomDatePickerContainer}
            popperPlacement="bottom-start"
            popperModifiers={[
                {
                    name: 'offset',
                    fn(state) {
                        state.y -= 9;
                        return state;
                    },
                },
            ]}
            enableTabLoop={false}
            useWeekdaysShort={true}
            calendarStartDay={1}
        />
    );
};

export default CustomDatePicker;
