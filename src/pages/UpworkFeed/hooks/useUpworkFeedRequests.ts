import { useEffect } from 'react';
import { useGetUpworkFeedsMutation } from '../../../api/upworkFeedsApi';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import { UpworkFeedSortBy } from '../../../interfaces-submodule/enums/upwork-feed/upwork-feed-sort-by.enum';
import { SortDirection } from '../../../interfaces-submodule/enums/common/sort-direction.enum';
import createUpworkFeedsSearchParams from '../utils/createUpworkFeedsSearchParams';

export interface IUpworkFeedRefetchSearchParams {
    title: string;
    published: Date | null;
    selectedKeywordsOptions: IOptionInterface[];
    selectedScoresOptions: IOptionInterface[];
    selectedReactionsOptions: IOptionInterface[];
}

const useUpworkFeedRequests = (
    refetchSearchParams: IUpworkFeedRefetchSearchParams,
    sortBy: UpworkFeedSortBy | null,
    sortDirection: SortDirection | null,
) => {
    const [getUpworkFeeds, { data }] = useGetUpworkFeedsMutation();

    useEffect(() => {
        getUpworkFeeds({ pageSize: 10, pageNumber: 1 });
    }, []);

    const refetchUpworkFeeds = () => {
        const searchParameters = createUpworkFeedsSearchParams(refetchSearchParams);

        getUpworkFeeds({
            searchParameters,
            ...(sortBy && { sortBy }),
            ...(sortDirection && { sortDirection }),
            pageSize: 10,
            pageNumber: 1,
        });
    };

    return { data, refetchUpworkFeeds, totalItemsCount, totalPagesCount };
};

export default useUpworkFeedRequests;
