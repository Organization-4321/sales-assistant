import { FC } from 'react';
import { SvgIconProps } from '@mui/material';

const AlertErrorIcon: FC<SvgIconProps> = (props) => {
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
                d="M7.27208 0C6.74165 0 6.23294 0.210714 5.85786 0.585786L0.585786 5.85786C0.210714 6.23294 0 6.74164 0 7.27208V14.7279C0 15.2584 0.210714 15.7671 0.585787 16.1421L5.85786 21.4142C6.23294 21.7893 6.74164 22 7.27208 22H14.7279C15.2584 22 15.7671 21.7893 16.1421 21.4142L21.4142 16.1421C21.7893 15.7671 22 15.2584 22 14.7279V7.27208C22 6.74164 21.7893 6.23294 21.4142 5.85786L16.1421 0.585786C15.7671 0.210714 15.2584 0 14.7279 0H7.27208ZM15.7071 6.29289C16.0976 6.68342 16.0976 7.31658 15.7071 7.70711L12.4142 11L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11 12.4142L7.70711 15.7071C7.31658 16.0976 6.68342 16.0976 6.29289 15.7071C5.90237 15.3166 5.90237 14.6834 6.29289 14.2929L9.58579 11L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L11 9.58579L14.2929 6.29289C14.6834 5.90237 15.3166 5.90237 15.7071 6.29289Z"
            />
        </svg>
    );
};

export default AlertErrorIcon;