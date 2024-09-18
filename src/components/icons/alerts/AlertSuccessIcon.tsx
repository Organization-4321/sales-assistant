import { FC } from 'react';
import { SvgIconProps } from '@mui/material';

const AlertSuccessIcon: FC<SvgIconProps> = (props) => {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071L6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929C6.68342 9.90237 7.31658 9.90237 7.70711 10.2929L10 12.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289Z"
            />
        </svg>
    );
};

export default AlertSuccessIcon;
