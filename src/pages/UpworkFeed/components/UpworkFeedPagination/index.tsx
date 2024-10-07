import { Box, Pagination, TablePagination, Typography } from '@mui/material';
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
                labelDisplayedRows={({ from, to, count }) => (
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography color="text.secondary" component="span" sx={{ opacity: 0.65 }}>
                            Items shown:
                        </Typography>
                        <Typography color="text.secondary" component="span" fontWeight="bold">
                            {from}-{to}
                        </Typography>
                        <Typography>
                            out of{' '}
                            <Typography color="text.secondary" component="span" fontWeight="bold">
                                {count !== -1 ? count : to}
                            </Typography>
                        </Typography>
                    </Box>
                )}
                labelRowsPerPage={
                    <Typography color="text.secondary" component="span" sx={{ opacity: 0.65 }}>
                        Items per page:
                    </Typography>
                }
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
