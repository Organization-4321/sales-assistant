import { SvgIconProps } from '@mui/material';
import CustomIcon from '../CustomIcon';

const DeleteIcon: React.FC<SvgIconProps> = (props) => {
    const path =
        'M9 4V2H15V4H20H21V6H20V18C20 19.6569 18.6569 21 17 21H7C5.34315 21 4 19.6569 4 18V6H3V4H4H9ZM6 6V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V6H6ZM9 8L9 17H11L11 8H9ZM13 17V8H15V17H13Z';

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

export default DeleteIcon;
