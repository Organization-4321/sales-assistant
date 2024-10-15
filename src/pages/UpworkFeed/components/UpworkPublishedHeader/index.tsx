import { FC } from 'react';
import CustomDatePicker from '../../../../components/UI/CustomDatePicker';

interface UpworkPublishedHeaderProps {
    date: Date | null;
    setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const UpworkPublishedHeader: FC<UpworkPublishedHeaderProps> = ({ date, setDate }) => {
    return <CustomDatePicker selected={date} onChange={(date) => setDate(date)} />;
};

export default UpworkPublishedHeader;
