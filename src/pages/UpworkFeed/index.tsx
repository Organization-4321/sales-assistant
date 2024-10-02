import { FC } from 'react';
import CustomTable from './components/CustomTable';
import { Button } from '@mui/material';
import useUpworkFeedFilters from './hooks/useUpworkFeedFilters';
import useUpworkFeedTable from './hooks/useUpworkFeedTable';
import useUpworkFeedRequests from './hooks/useUpworkFeedRequests';

interface UpworkFeedProps {}

const UpworkFeed: FC<UpworkFeedProps> = ({}) => {
    const {
        title,
        setTitle,
        published,
        setPublished,
        selectedKeywordsOptions,
        setSelectedKeywordsOptions,
        setSelectedScoresOptions,
        selectedScoresOptions,
    } = useUpworkFeedFilters();

    const { data, refetchUpworkFeeds } = useUpworkFeedRequests();

    const { tableItems, keywordsOptions, scoresOptions, columns } = useUpworkFeedTable(data);

    return (
        <div>
            <Button onClick={refetchUpworkFeeds}>Refetch RSS</Button>
            <CustomTable
                data={tableItems}
                columns={columns}
                title={title}
                setTitle={setTitle}
                keywordsOptions={keywordsOptions}
                scoresOptions={scoresOptions}
                selectedKeywordsOptions={selectedKeywordsOptions}
                setSelectedKeywordsOptions={setSelectedKeywordsOptions}
                selectedScoresOptions={selectedScoresOptions}
                setSelectedScoresOptions={setSelectedScoresOptions}
                published={published}
                setPublished={setPublished}
            />
        </div>
    );
};

export default UpworkFeed;
