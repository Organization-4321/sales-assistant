import { useState } from 'react';

const useVacancyPopover = () => {
    const [comment, setComment] = useState('');
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [popoverTitle, setPopoverTitle] = useState('');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, title: string) => {
        setAnchorEl(event.currentTarget);
        setPopoverTitle(title);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setPopoverTitle('');
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return {
        comment,
        setComment,
        anchorEl,
        popoverTitle,
        handleClick,
        handleClose,
        open,
        id,
    };
};

export default useVacancyPopover;
