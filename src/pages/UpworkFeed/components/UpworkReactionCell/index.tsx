import { FC } from 'react';
import { ReviewType } from '../../../../interfaces-submodule/enums/upwork-feed/review-type.enum';
import LikeIcon from '../../../../components/icons/LikeIcon';
import DislikeIcon from '../../../../components/icons/DislikeIcon';
import { Box } from '@mui/material';

interface UpworkReactionCellProps {
    type: ReviewType;
}

const UpworkReactionCell: FC<UpworkReactionCellProps> = ({ type }) => {
    return (
        <Box display="flex" justifyContent="center">
            {type === ReviewType.Like ? (
                <LikeIcon sx={{ textAlign: 'center' }} />
            ) : (
                <DislikeIcon sx={{ textAlign: 'center' }} />
            )}
        </Box>
    );
};

export default UpworkReactionCell;
