import { useEffect } from 'react';

const useDisableBodyScroll = (isOpened: boolean) => {
    useEffect(() => {
        if (isOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpened]);
};

export default useDisableBodyScroll;
