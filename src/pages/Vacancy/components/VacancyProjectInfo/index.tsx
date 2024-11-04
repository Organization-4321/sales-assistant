import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import extractLinkAndText from '../../utils/extractLinkAndText';
import ScoreChip from '../../../../components/UI/ScoreChip';
import RouterLink from '../../../../components/UI/RouterLink';
import VacancyInfoCard from '../VacancyInfoCard';
import moment from 'moment';
import useExpandBlock from '../../../../hooks/useExpandBlock';
import ExpandableTypography from '../../../../components/UI/ExpandableTypography';

interface VacancyProjectInfoProps {
    title: string;
    url: string;
    description: string;
    published: string;
    score: number;
}

const VacancyProjectInfo: FC<VacancyProjectInfoProps> = ({
    title,
    url,
    published,
    score,
    description,
}) => {
    const { isExpanded, handleToggleExpanded } = useExpandBlock();

    const { text, link } = extractLinkAndText(description);

    return (
        <VacancyInfoCard title="Project info">
            <Box display="flex" justifyContent="space-between" paddingTop={1} paddingBottom={2.5}>
                <Box display="flex" gap={2}>
                    <ScoreChip score={score} sx={{ fontSize: '1rem' }} />
                    <RouterLink to={url} target="_blank">
                        {title}
                    </RouterLink>
                </Box>
                <Typography sx={{ textWrap: 'nowrap' }} color="customGray.light">
                    {moment(published).format('MM/DD/YYYY HH:mm')}
                </Typography>
            </Box>
            <ExpandableTypography
                text={text}
                visibleTextLength={100}
                isExpanded={isExpanded}
                onExpandButtonClick={handleToggleExpanded}
            />
            <Button href={link} target="_blank" sx={{ mt: 1 }}>
                Apply
            </Button>
        </VacancyInfoCard>
    );
};

export default VacancyProjectInfo;
