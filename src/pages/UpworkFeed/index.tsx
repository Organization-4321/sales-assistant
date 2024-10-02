import { FC } from 'react';
import CustomTable from './components/CustomTable';
import { Button } from '@mui/material';
import useUpworkFeedFilters from './hooks/useUpworkFeedFilters';
import useUpworkFeedTable from './hooks/useUpworkFeedTable';
import useUpworkFeedRequests from './hooks/useUpworkFeedRequests';
import useUpworkFeedSort from './hooks/useUpworkFeedSort';

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
        selectedReactionsOptions,
        setSelectedReactionsOptions,
    } = useUpworkFeedFilters();

    const { sortBy, sortDirection, handleSetSortBy } = useUpworkFeedSort();

    const { data, refetchUpworkFeeds } = useUpworkFeedRequests(
        {
            title,
            published,
            selectedKeywordsOptions,
            selectedScoresOptions,
            selectedReactionsOptions,
        },
        sortBy,
        sortDirection,
    );

    const { tableItems, keywordsOptions, scoresOptions, reactionsOptions, columns } =
        useUpworkFeedTable(data);

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
                reactionsOptions={reactionsOptions}
                selectedReactionsOptions={selectedReactionsOptions}
                setSelectedReactionsOptions={setSelectedReactionsOptions}
            />
        </div>
    );
};

export default UpworkFeed;
