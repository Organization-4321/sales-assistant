import { FC } from 'react';
import CustomPopover from '../../../../components/UI/CustomPopover';
import { Box, Button, PopoverProps, TextField, Typography } from '@mui/material';

interface VacancyKeywordsPopoverProps extends PopoverProps {
    title: string;
    comment: string;
    setComment: React.Dispatch<React.SetStateAction<string>>;
}

const VacancyKeywordsPopover: FC<VacancyKeywordsPopoverProps> = ({
    title,
    comment,
    setComment,
    ...popoverProps
}) => {
    return (
        <CustomPopover {...popoverProps}>
            <Box display="flex" flexDirection="column" gap={1.5}>
                <Typography variant="body2" color="textSecondary">
                    {title}
                </Typography>
                <TextField
                    variant="filled"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    label="Comment"
                    placeholder="Comment"
                    multiline
                />
                <Box display="flex" justifyContent="space-between" gap={1.5}>
                    <Button sx={{ flex: 1, fontSize: '14px' }}>Cancel</Button>
                    <Button variant="contained" sx={{ flex: 1, fontSize: '14px' }}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </CustomPopover>
    );
};

export default VacancyKeywordsPopover;
