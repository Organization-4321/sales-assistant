import { createSvgIcon } from '@mui/material';

const VisibilityIcon = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 5C19.1407 5 22.1896 10.451 22.9109 12C22.1896 13.549 19.1407 19 12 19C4.85927 19 1.81044 13.549 1.08912 12C1.81044 10.451 4.85927 5 12 5Z"
            stroke="black"
            strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" fill="black" />
    </svg>,
    'VisibilityIcon',
);

export default VisibilityIcon;
