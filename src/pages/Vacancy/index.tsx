import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import VacancyProjectInfo from './components/VacancyProjectInfo';
import VacancyKeywords from './components/VacancyKeywords';
import VacancyMatchedCases from './components/VacancyMatchedCases';
import VacancyMatchedBlogs from './components/VacancyMatchedBlogs';
import useUpworkFeedByIdData from './hooks/useUpworkFeedByIdData';
import VacancyLinkBack from './components/VacancyLinkBack';

interface VacancyPageProps {}

const VacancyPage: FC<VacancyPageProps> = ({}) => {
    const params = useParams<{
        id: string;
    }>();

    const { upworkFeedData } = useUpworkFeedByIdData(params.id as string);

    if (!upworkFeedData) {
        return (
            <Box py={1}>
                <VacancyLinkBack />
            </Box>
        );
    }

    const {
        title,
        url,
        description,
        score,
        published,
        keywords,
        matchedCasesData,
        matchedBlogsData,
    } = upworkFeedData;

    return (
        <>
            <Box py={1}>
                <VacancyLinkBack />
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                    {title}
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                gap={1}
                maxWidth={800}
                sx={{ mx: 'auto', mt: 1 }}>
                <VacancyProjectInfo
                    title={title}
                    url={url}
                    description={description}
                    score={score}
                    published={published}
                />
                <VacancyKeywords keywords={keywords} />
                <VacancyMatchedCases casesData={matchedCasesData} />
                <VacancyMatchedBlogs blogsData={matchedBlogsData} />
            </Box>
        </>
    );
};

export default VacancyPage;
