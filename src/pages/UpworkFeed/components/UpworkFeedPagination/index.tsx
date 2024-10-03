import { Box, Pagination, TablePagination } from '@mui/material';
import { FC } from 'react';

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
            <TablePagination
                component="div"
                count={totalItemsCount}
                page={page - 1}
                rowsPerPage={perPage}
                ActionsComponent={() => null}
                onPageChange={() => {}}
                onRowsPerPageChange={handlePageSizeChange}
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
