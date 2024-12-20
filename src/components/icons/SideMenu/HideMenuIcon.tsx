import { SvgIconProps } from '@mui/material';
import CustomIcon from '../CustomIcon';

const HideMenuIcon: React.FC<SvgIconProps> = (props) => {
    const path =
        'M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071C15.0976 18.3166 15.0976 17.6834 14.7071 17.2929L10.4142 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H10.4142L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289ZM3 18C3 18.5 3.44772 19 4 19C4.55229 19 5 18.5 5 18V6C5 5.5 4.55228 5 4 5C3.44771 5 3 5.5 3 6V18Z';

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

export default HideMenuIcon;
