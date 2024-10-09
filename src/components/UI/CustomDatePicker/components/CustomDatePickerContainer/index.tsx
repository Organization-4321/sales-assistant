import { FC } from 'react';
import { CalendarContainer } from 'react-datepicker';

interface CustomDatePickerContainerProps {
    className: string;
    children: React.ReactNode;
}

const CustomDatePickerContainer: FC<CustomDatePickerContainerProps> = ({ className, children }) => {
    return (
        <CalendarContainer className={className}>
            <div style={{ position: 'relative' }}>{children}</div>
        </CalendarContainer>
    );
};

export default CustomDatePickerContainer;
