import { Box, TablePagination, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import ArrowIconLeft from '../../../../components/icons/ArrowIconLeft';

interface StyledTablePaginationProps {
    totalItemsCount: number;
    page: number;
    perPage: number;
    handlePageSizeChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
}

const StyledTablePagination: FC<StyledTablePaginationProps> = ({
    totalItemsCount,
    page,
    perPage,
    handlePageSizeChange,
}) => {
    const theme = useTheme();

    return (
        <TablePagination
            component="div"
            count={totalItemsCount}
            page={page - 1}
            rowsPerPage={perPage}
            ActionsComponent={() => null}
            onPageChange={() => {}}
            onRowsPerPageChange={handlePageSizeChange}
            labelDisplayedRows={({ from, to, count }) => (
                <Box display="flex" alignItems="center" gap={1} component="span">
                    <Typography
                        color={theme.palette.text.secondary}
                        component="span"
                        sx={{ opacity: 0.65 }}>
                        Items shown:
                    </Typography>
                    <Typography
                        color={theme.palette.text.secondary}
                        component="span"
                        fontWeight="bold">
                        {from}-{to}
                    </Typography>
                    <Typography component="span">
                        out of{' '}
                        <Typography
                            color={theme.palette.text.secondary}
                            component="span"
                            fontWeight="bold">
                            {count !== -1 ? count : to}
                        </Typography>
                    </Typography>
                </Box>
            )}
            labelRowsPerPage={
                <Typography
                    color={theme.palette.text.secondary}
                    component="span"
                    sx={{ opacity: 0.65 }}>
                    Items per page:
                </Typography>
            }
            sx={(theme) => ({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '& .MuiTablePagination-spacer': {
                    display: 'none',
                },
                '& .MuiTablePagination-toolbar': {
                    width: '100%',
                    paddingLeft: 1,
                },
                '& .MuiTablePagination-selectLabel': {
                    order: 1,
                },
                '& .MuiTablePagination-input': {
                    order: 2,
                    border: `1px solid ${theme.palette.borderColors.secondary}`,
                    borderRadius: '6px',
                    padding: '12px 8px 12px 12px',
                    width: '100px',
                    height: '48px',
                    marginRight: 0,
                    backgroundColor: theme.palette.background.paper,
                    '& .MuiSelect-select': {
                        textAlignLast: 'left',
                        background: theme.palette.background.paper,
                        padding: '10px 20px 10px 0',
                        minHeight: 0,
                        fontSize: '16px',
                        color: theme.palette.text.secondary,
                    },
                },
                '& .MuiTablePagination-displayedRows': {
                    order: 0,
                    marginRight: 1.5,
                    borderRight: `1px solid ${theme.palette.borderColors.main}`,
                    '& .MuiBox-root': {
                        py: 0.75,
                        paddingRight: '20px',
                    },
                },
            })}
            slotProps={{
                select: {
                    IconComponent: () => (
                        <ArrowIconLeft
                            sx={{
                                width: '16px',
                                height: '16px',
                                transform: 'rotate(-90deg)',
                                color: theme.palette.text.primary,
                            }}
                        />
                    ),
                },
            }}
        />
    );
};

export default StyledTablePagination;
