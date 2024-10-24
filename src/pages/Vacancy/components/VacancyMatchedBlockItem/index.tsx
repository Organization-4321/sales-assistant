import { Box, Checkbox } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { IUpworkFeedMatchEntityDto } from '../../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-match-entity.dto';
import RouterLink from '../../../../components/UI/RouterLink';
import { useUpdateUpworkFeedMutation } from '../../../../api/upworkFeedsApi';
import { useParams } from 'react-router-dom';

interface VacancyMatchedBlockItemProps {
    matchData: IUpworkFeedMatchEntityDto;
    leftSideContent: React.ReactNode;
    blockName: 'cases' | 'blogs';
}

const VacancyMatchedBlockItem: FC<VacancyMatchedBlockItemProps> = ({
    matchData,
    leftSideContent,
    blockName,
}) => {
    const { id } = useParams();
    const [isChecked, setIsChecked] = useState(matchData.selected);
    const [updateUpworkFeed] = useUpdateUpworkFeedMutation();

    const handleCheckboxChange = (e: ChangeEvent, checked: boolean) => {
        setIsChecked(checked);

        const updatedCase = [
            {
                link: matchData.link,
                selected: checked,
            },
        ];

        updateUpworkFeed({
            feedId: id as string,
            updateMatchesBody: {
                matchedCases: blockName === 'cases' ? updatedCase : [],
                matchedBlogs: blockName === 'blogs' ? updatedCase : [],
            },
        });
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            gap={1}
            sx={(theme) => ({
                borderBottom: `1px dashed ${theme.palette.mode === 'dark' ? '#414752' : '#d5d7db'}`,
                py: 1,
            })}>
            <Box display="flex" flexDirection="column" gap={1.5}>
                <RouterLink
                    to={matchData.link}
                    target="_blank"
                    sx={{ textDecoration: 'underline' }}>
                    {matchData.title}
                </RouterLink>
                {leftSideContent}
            </Box>
            <Checkbox
                sx={{ alignSelf: 'start', padding: 0 }}
                checked={!!isChecked}
                onChange={handleCheckboxChange}
            />
        </Box>
    );
};

export default VacancyMatchedBlockItem;
