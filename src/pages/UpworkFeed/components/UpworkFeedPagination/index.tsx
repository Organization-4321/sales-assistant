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
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            position="sticky"
            bottom={0}
            left={0}
            sx={(theme) => ({
                backgroundColor: theme.palette.background.default,
                borderTop: `1px solid ${theme.palette.borderColors.main}`,
            })}>
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
                sx={{
                    '& .MuiPagination-ul': {
                        flexWrap: 'nowrap',
                    },
                }}
            />
        </Box>
    );
};

export default UpworkFeedPagination;
