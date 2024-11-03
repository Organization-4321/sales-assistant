import { FC } from 'react';
import CustomTable from './components/CustomTable';
import { Box, Button } from '@mui/material';
import useUpworkFeedFilters from './hooks/useUpworkFeedFilters';
import useUpworkFeedTable from './hooks/useUpworkFeedTable';
import useUpworkFeedRequests from './hooks/useUpworkFeedRequests';
import useUpworkFeedSort from './hooks/useUpworkFeedSort';
import useUpworkFeedPagination from './hooks/useUpworkFeedPagination';
import UpworkFeedPagination from './components/UpworkFeedPagination';
import RefreshIcon from '../../components/icons/RefreshIcon';

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

    const { pageNumber, pageSize, handlePageNumberChange, handlePageSizeChange, setPageNumber } =
        useUpworkFeedPagination();

    const { data, refetchUpworkFeeds, totalItemsCount, totalPagesCount } = useUpworkFeedRequests(
        {
            title,
            published,
            selectedKeywordsOptions,
            selectedScoresOptions,
            selectedReactionsOptions,
        },
        sortBy,
        sortDirection,
        pageNumber,
        pageSize,
        setPageNumber,
    );

    const { tableItems, keywordsOptions, scoresOptions, reactionsOptions, columns } =
        useUpworkFeedTable(data);

    return (
        <>
            <Box minHeight="100vh">
                <Box>
                    <Button onClick={refetchUpworkFeeds} startIcon={<RefreshIcon />}>
                        Refetch RSS
                    </Button>
                </Box>
                <CustomTable
                    data={tableItems}
                    columns={columns}
                    titleProps={{
                        title,
                        setTitle,
                    }}
                    filterProps={{
                        keywordsOptions,
                        scoresOptions,
                        selectedKeywordsOptions,
                        setSelectedKeywordsOptions,
                        selectedScoresOptions,
                        setSelectedScoresOptions,
                        published,
                        setPublished,
                        reactionsOptions,
                        selectedReactionsOptions,
                        setSelectedReactionsOptions,
                    }}
                    sortProps={{
                        sortBy,
                        handleSetSortBy,
                        sortDirection,
                    }}
                />
            </Box>
            <UpworkFeedPagination
                page={pageNumber}
                handlePageChange={handlePageNumberChange}
                perPage={pageSize}
                totalItemsCount={totalItemsCount}
                totalPagesCount={totalPagesCount}
                handlePageSizeChange={handlePageSizeChange}
            />
        </>
    );
};

export default UpworkFeed;
