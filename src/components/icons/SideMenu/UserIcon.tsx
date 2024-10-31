import { SvgIconProps } from '@mui/material';
import CustomIcon from '../CustomIcon';

const UserIcon: React.FC<SvgIconProps> = (props) => {
    const path =
        'M12 3C7.02944 3 3 7.02944 3 12C3 13.7013 3.47205 15.2923 4.29233 16.6493L4.46447 16.4645C5.40215 15.5268 6.67392 15 8 15H16C17.3261 15 18.5979 15.5268 19.5355 16.4645L19.7077 16.6493C20.5279 15.2923 21 13.7013 21 12C21 7.02944 16.9706 3 12 3ZM18.4407 18.2863L18.1213 17.8787C17.5587 17.3161 16.7956 17 16 17H8C7.20435 17 6.44129 17.3161 5.87868 17.8787L5.55928 18.2863C7.19365 19.9605 9.47544 21 12 21C14.5246 21 16.8063 19.9605 18.4407 18.2863ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 9.99999 7.89543 9.99999 9C9.99999 10.1046 10.8954 11 12 11ZM12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79085 5 7.99999 6.79086 7.99999 9C7.99999 11.2091 9.79085 13 12 13Z';

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

export default UserIcon;