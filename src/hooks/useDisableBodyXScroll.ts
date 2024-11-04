import { useEffect } from 'react';

const useDisableBodyXScroll = (isOpened: boolean) => {
    useEffect(() => {
        if (isOpened) {
            document.body.style.overflowX = 'hidden';
        } else {
            document.body.style.overflowX = '';
        }
    }, [isOpened]);
};

export default useDisableBodyXScroll;
