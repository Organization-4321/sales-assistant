import { Box, Grid, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import SortDirectionIcon from '../../../../components/icons/SortDirectionIcon';
import { SortDirection } from '../../../../interfaces-submodule/enums/common/sort-direction.enum';
import { UpworkFeedSortBy } from '../../../../interfaces-submodule/enums/upwork-feed/upwork-feed-sort-by.enum';

interface UpworkFeedSortableHeaderProps {
    title: string;
    isSortedBy: boolean;
    sortBy: UpworkFeedSortBy;
    handleSetSortBy: (nextSortBy: UpworkFeedSortBy) => void;
    sortDirection: SortDirection | null;
    children: ReactNode;
}

const UpworkFeedSortableHeader: FC<UpworkFeedSortableHeaderProps> = ({
    title,
    isSortedBy,
    sortBy,
    handleSetSortBy,
    sortDirection,
    children,
}) => {
    const handleClick = () => {
        handleSetSortBy(sortBy);
    };

    return (
        <Grid container direction="column" gap={4}>
            <Grid item>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle2">{title}</Typography>
                    <SortDirectionIcon
                        fill={
                            isSortedBy
                                ? sortDirection === SortDirection.ASC
                                    ? 'green'
                                    : 'red'
                                : undefined
                        }
                        onClick={handleClick}
                    />
                </Box>
            </Grid>
            <Grid item>{children}</Grid>
        </Grid>
    );
};

export default UpworkFeedSortableHeader;
