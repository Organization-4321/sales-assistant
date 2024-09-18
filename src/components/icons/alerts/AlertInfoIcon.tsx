import { FC } from 'react';
import { SvgIconProps } from '@mui/material';

const AlertInfoIcon: FC<SvgIconProps> = (props) => {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM10 11L10 14.9986V15C10 15.5523 10.4477 16 11 16H12C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14L12 10.0014V10C12 9.44771 11.5523 9 11 9H10C9.44772 9 9 9.44771 9 10C9 10.5523 9.44771 11 10 11ZM11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8Z"
            />
        </svg>
    );
};

export default AlertInfoIcon;
