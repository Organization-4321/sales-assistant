import { useState } from 'react';
import { UpworkFeedSortBy } from '../../../interfaces-submodule/enums/upwork-feed/upwork-feed-sort-by.enum';
import { SortDirection } from '../../../interfaces-submodule/enums/common/sort-direction.enum';

const useUpworkFeedSort = () => {
    const [sortBy, setSortBy] = useState<UpworkFeedSortBy | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection | null>(null);

    const handleSetSortBy = (nextSortBy: UpworkFeedSortBy | null) => {
        if (sortBy && nextSortBy === sortBy && sortDirection === SortDirection.DESC) {
            setSortBy(null);
            setSortDirection(SortDirection.ASC);
        } else if (nextSortBy === sortBy && sortBy) {
            setSortDirection(
                sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC,
            );
        } else {
            if (!sortDirection) setSortDirection(SortDirection.ASC);
            setSortBy(nextSortBy);
        }
    };

    return { sortBy, handleSetSortBy, sortDirection };
};

export default useUpworkFeedSort;
