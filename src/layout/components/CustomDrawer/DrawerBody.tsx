import { Box, Button, List } from '@mui/material';
import { FC, useState } from 'react';
import SideMenuItem from '../SideMenuItem';
import DrawerListItemPopover from '../DrawerListItemPopover';
import AddIcon from '../../../components/icons/SideMenu/AddIcon';
import useSideMenuPopover from '../../hooks/useSideMenuPopover';
import OptionsIcon from '../../../components/icons/SideMenu/OptionsIcon';
import SideMenuEditableItem from '../SideMenuItem/SideMenuEditableItem';

interface DrawerBodyProps {}

const DrawerBody: FC<DrawerBodyProps> = ({}) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const { anchorEl, clickedItemKey, handleClick, handleClose, open } = useSideMenuPopover();

    return (
        <Box px={2} py={1.5}>
            <Button fullWidth startIcon={<AddIcon />}>
                New Chat
            </Button>
            <List sx={{ py: 1.5 }}>
                {['Item1', 'Item2', 'Item3', 'Item4'].map((text) => {
                    return isEditMode && clickedItemKey === text ? (
                        <SideMenuEditableItem
                            key={text}
                            text={text}
                            onDiscardClick={() => setIsEditMode(false)}
                        />
                    ) : (
                        <SideMenuItem
                            key={text}
                            label={text}
                            afterIcon={
                                <OptionsIcon
                                    onClick={(e) => {
                                        setIsEditMode(false);
                                        handleClick(e, text);
                                    }}
                                />
                            }
                            afterIconHighlighted={open && clickedItemKey === text}
                        />
                    );
                })}
                <DrawerListItemPopover
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={open}
                    onRenameClick={() => {
                        setIsEditMode(true);
                        handleClose();
                    }}
                />
            </List>
        </Box>
    );
};

export default DrawerBody;
