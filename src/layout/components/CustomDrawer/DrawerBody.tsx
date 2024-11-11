import { Box, Button, List } from '@mui/material';
import { FC, useState } from 'react';
import SideMenuItem from '../SideMenuItem';
import DrawerListItemPopover from '../DrawerListItemPopover';
import AddIcon from '../../../components/icons/SideMenu/AddIcon';
import useSideMenuPopover from '../../hooks/useSideMenuPopover';
import OptionsIcon from '../../../components/icons/SideMenu/OptionsIcon';
import SideMenuEditableItem from '../SideMenuItem/SideMenuEditableItem';
import { useGetChatsQuery } from '../../../api/chatsApi';
import { APP_ROUTES } from '../../../routes/app-routes.enum';

interface DrawerBodyProps {}

const DrawerBody: FC<DrawerBodyProps> = ({}) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const { anchorEl, clickedItemKey, handleClick, handleClose, open } = useSideMenuPopover();

    const { data } = useGetChatsQuery();
    const chats = data?.data || [];

    return (
        <Box px={2} py={1.5}>
            <Button fullWidth startIcon={<AddIcon />}>
                New Chat
            </Button>
            <List sx={{ py: 1.5 }}>
                {chats.map((chat) => {
                    return isEditMode && clickedItemKey === chat.name ? (
                        <SideMenuEditableItem
                            key={chat.id}
                            text={chat.name}
                            onDiscardClick={() => setIsEditMode(false)}
                        />
                    ) : (
                        <SideMenuItem
                            key={chat.id}
                            label={chat.name}
                            to={`${APP_ROUTES.CHAT_COMMON_ENDPOINT}/${chat.id}`}
                            afterIcon={
                                <OptionsIcon
                                    onClick={(e) => {
                                        setIsEditMode(false);
                                        handleClick(e, chat.name);
                                    }}
                                />
                            }
                            afterIconHighlighted={open && clickedItemKey === chat.name}
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
