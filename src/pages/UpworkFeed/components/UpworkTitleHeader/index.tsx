import { FC } from 'react';
import UpworkFeedInput from '../UpworkFeedInput';

interface UpworkTitleHeaderProps {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const UpworkTitleHeader: FC<UpworkTitleHeaderProps> = ({ inputValue, setInputValue }) => {
    return (
        <UpworkFeedInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onClearIconClick={() => setInputValue('')}
        />
    );
};

export default UpworkTitleHeader;
