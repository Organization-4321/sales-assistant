import { SvgIconProps } from '@mui/material';
import CustomIcon from '../CustomIcon';

const EditIcon: React.FC<SvgIconProps> = (props) => {
    const path =
        'M18.4142 3.99985C17.6332 3.2188 16.3669 3.2188 15.5858 3.99985L13.0858 6.49985L17.5 10.9141L20 8.41406C20.7811 7.63301 20.7811 6.36668 20 5.58564L18.4142 3.99985ZM17.5 8.08564L15.9142 6.49985L17 5.41406L18.5858 6.99985L17.5 8.08564ZM16.4142 11.9998L12 7.58563L3 16.5856V20.9998H7.41421L16.4142 11.9998ZM5 18.9998V17.4141L12 10.4141L13.5858 11.9998L6.58579 18.9998H5Z';

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

export default EditIcon;
