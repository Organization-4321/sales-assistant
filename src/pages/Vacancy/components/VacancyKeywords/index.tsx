import { FC } from 'react';
import { IUpworkFeedDetailItemDTO } from '../../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-detail-item.dto';
import { Button, Chip, Box } from '@mui/material';
import LikeIcon from '../../../../components/icons/LikeIcon';
import DislikeIcon from '../../../../components/icons/DislikeIcon';
import VacancyInfoCard from '../VacancyInfoCard';
import VacancyKeywordsPopover from './VacancyKeywordsPopover';
import useVacancyPopover from '../../hooks/useVacancyPopover';

interface VacancyKeywordsProps {
    keywords: IUpworkFeedDetailItemDTO['keywords'];
}

const VacancyKeywords: FC<VacancyKeywordsProps> = ({ keywords }) => {
    const { comment, setComment, anchorEl, popoverTitle, handleClick, handleClose, open, id } =
        useVacancyPopover();

    return (
        <VacancyInfoCard title="Keywords">
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" flexWrap="wrap" sx={{ gap: 0.5, py: 0.5 }}>
                    {keywords.map((keyword) => (
                        <Chip key={keyword} label={keyword} sx={{ fontSize: '16px' }} />
                    ))}
                </Box>
                <Box display="flex" gap={1}>
                    <Button
                        sx={{ width: '36px', height: '36px', minWidth: 'auto' }}
                        onClick={(event) =>
                            handleClick(event, 'Why did you like the keywords section?')
                        }>
                        <LikeIcon />
                    </Button>
                    <Button
                        sx={{ width: '36px', height: '36px', minWidth: 'auto' }}
                        onClick={(event) =>
                            handleClick(event, 'Why did you dislike the keywords section?')
                        }>
                        <DislikeIcon />
                    </Button>
                    <VacancyKeywordsPopover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        title={popoverTitle}
                        comment={comment}
                        setComment={setComment}
                    />
                </Box>
            </Box>
        </VacancyInfoCard>
    );
};

export default VacancyKeywords;
