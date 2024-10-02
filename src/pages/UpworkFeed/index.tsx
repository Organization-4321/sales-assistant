import { FC, useEffect } from 'react';
import { useGetUpworkFeedsMutation } from '../../api/upworkFeedsApi';
import CustomTable from './components/CustomTable';
import { Button } from '@mui/material';
import useUpworkFeedFilters from './hooks/useUpworkFeedFilters';
import useUpworkFeedTable from './hooks/useUpworkFeedTable';

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

    const [getUpworkFeeds, { data }] = useGetUpworkFeedsMutation();

    useEffect(() => {
        getUpworkFeeds({ pageSize: 10, pageNumber: 1 });
    }, []);

    const { tableItems, keywordsOptions, scoresOptions, columns } = useUpworkFeedTable(data);

    const refetchUpworkFeeds = () => {
        getUpworkFeeds({ pageSize: 5, pageNumber: 1 });
    };

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
