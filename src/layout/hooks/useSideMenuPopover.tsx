import { useState } from 'react';

const useSideMenuPopover = () => {
    const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
    const [clickedItemKey, setClickedItemKey] = useState<string | null>(null);

    const handleClick = (event: React.MouseEvent<SVGSVGElement>, key: string) => {
        setAnchorEl(event.currentTarget);
        setClickedItemKey(key);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return {
        anchorEl,
        clickedItemKey,
        handleClick,
        handleClose,
        open,
    };
};

export default useSideMenuPopover;
