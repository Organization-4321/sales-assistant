import { SvgIconProps } from '@mui/material';
import CustomIcon from '../CustomIcon';

const OptionsIcon: React.FC<SvgIconProps> = (props) => {
    const path =
        'M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5Z M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17Z';

    return (
        <CustomIcon
            path={path}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fillRule="evenodd"
            clipRule="evenodd"
            {...props}
        />
    );
};

export default OptionsIcon;
