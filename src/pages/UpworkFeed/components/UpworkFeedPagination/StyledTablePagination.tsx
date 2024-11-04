import { Box, TablePagination, Typography } from '@mui/material';
import { FC } from 'react';
import ArrowIconLeft from '../../../../components/icons/ArrowIconLeft';
import { useAppTheme } from '../../../../theme';
import { ITheme } from '../../../../theme/types';

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
    const theme = useAppTheme();

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
                    <Typography color="text.secondary" component="span" sx={{ opacity: 0.65 }}>
                        Items shown:
                    </Typography>
                    <Typography color="text.secondary" component="span" fontWeight="bold">
                        {from}-{to}
                    </Typography>
                    <Typography component="span">
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
                    border: `1px solid ${theme.palette.mode === 'dark' ? '#70737a' : '#b0b3b8'}`,
                    borderRadius: '6px',
                    padding: '12px 8px 12px 12px',
                    width: '100px',
                    height: '48px',
                    marginRight: 0,
                    backgroundColor: theme.palette.mode === 'dark' ? '#131314' : '#fff',
                    '& .MuiSelect-select': {
                        textAlignLast: 'left',
                        background: theme.palette.mode === 'dark' ? '#131314' : '#fff',
                        padding: '10px 20px 10px 0',
                        minHeight: 0,
                        fontSize: '16px',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#131314',
                    },
                },
                '& .MuiTablePagination-displayedRows': {
                    order: 0,
                    marginRight: 1.5,
                    borderRight: `1px solid ${
                        theme.palette.mode === 'dark' ? '#414752' : '#d5d7db'
                    }`,
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
                                color: theme.themeName === ITheme.DARK ? '#ebecf0' : '#252533',
                            }}
                        />
                    ),
                },
            }}
        />
    );
};

export default StyledTablePagination;
