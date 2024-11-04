import { Box, Button, TextField, useTheme } from '@mui/material';
import { FC } from 'react';
import commonBoxShadow from '../../../theme/common/commonBoxShadow';

interface SideMenuEditableItemProps {
    text: string;
    onDiscardClick?: () => void;
}

const SideMenuEditableItem: FC<SideMenuEditableItemProps> = ({ text, onDiscardClick }) => {
    const theme = useTheme();

    return (
        <Box
            display="flex"
            flexDirection="column"
            gap={1.5}
            padding={1.5}
            boxShadow={commonBoxShadow}
            border={theme.borders.thin}
            borderRadius={3}>
            <TextField fullWidth value={text} />
            <Box display="flex" gap={1.5}>
                <Button sx={{ flex: 1 }} onClick={onDiscardClick}>
                    Discard
                </Button>
                <Button sx={{ flex: 1 }} variant="contained">
                    Save
                </Button>
            </Box>
        </Box>
    );
};

export default SideMenuEditableItem;
