import { SvgIconProps } from '@mui/material';
import CustomIcon from '../CustomIcon';

const LogoutIcon: React.FC<SvgIconProps> = (props) => {
    const path =
        'M7 2C5.34315 2 4 3.34315 4 5V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V18H18V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V6H20V5C20 3.34315 18.6569 2 17 2H7ZM15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L16.5858 11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H16.5858L14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L20.4142 12L15.7071 7.29289Z';

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

export default LogoutIcon;
