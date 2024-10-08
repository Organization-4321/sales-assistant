import { Box, Pagination } from '@mui/material';
import { FC } from 'react';
import StyledTablePagination from './StyledTablePagination';

interface UpworkFeedPaginationProps {
    page: number;
    perPage: number;
    handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
    totalItemsCount: number;
    totalPagesCount: number;
    handlePageSizeChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
}

const UpworkFeedPagination: FC<UpworkFeedPaginationProps> = ({
    page,
    perPage,
    handlePageChange,
    totalItemsCount,
    totalPagesCount,
    handlePageSizeChange,
}) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <StyledTablePagination
                page={page}
                perPage={perPage}
                totalItemsCount={totalItemsCount}
                handlePageSizeChange={handlePageSizeChange}
            />
            <Pagination
                page={page}
                onChange={handlePageChange}
                shape="rounded"
                variant="outlined"
                count={totalPagesCount}
                showFirstButton
                showLastButton
            />
        </Box>
    );
};

export default UpworkFeedPagination;
