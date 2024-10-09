import { useEffect, useRef } from 'react';
import { useGetUpworkFeedsMutation } from '../../../api/upworkFeedsApi';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import { UpworkFeedSortBy } from '../../../interfaces-submodule/enums/upwork-feed/upwork-feed-sort-by.enum';
import { SortDirection } from '../../../interfaces-submodule/enums/common/sort-direction.enum';
import createUpworkFeedsSearchParams from '../utils/createUpworkFeedsSearchParams';
import { ISearchParameterDTO } from '../../../interfaces-submodule/interfaces/dto/common/isearch-parameter.interface';
import { UpworkFeedSearchBy } from '../../../interfaces-submodule/enums/upwork-feed/upwork-feed-search-by.enum';

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
    pageNumber: number,
    pageSize: number,
    setPageNumber: React.Dispatch<React.SetStateAction<number>>,
) => {
    const shouldRefetch = useRef<boolean>(true);
    const savedRefetchParams = useRef<ISearchParameterDTO<UpworkFeedSearchBy>[] | null>(null);
    const [getUpworkFeeds, { data }] = useGetUpworkFeedsMutation();

    const totalKeywordsOptionsCount = data?.data.keywordsOptions.length || 0;

    useEffect(() => {
        getUpworkFeeds({
            searchParameters: savedRefetchParams.current || [],
            ...(sortBy && { sortBy }),
            ...(sortDirection && { sortDirection }),
            pageSize,
            pageNumber: 1,
        });

        shouldRefetch.current = false;
    }, [pageSize]);

    useEffect(() => {
        if (shouldRefetch.current)
            getUpworkFeeds({
                searchParameters: savedRefetchParams.current || [],
                ...(sortBy && { sortBy }),
                ...(sortDirection && { sortDirection }),
                pageSize,
                pageNumber,
            });
        shouldRefetch.current = true;
    }, [pageNumber]);

    const totalItemsCount = data?.data.items.totalCount || -1;
    const totalPagesCount = data?.data.items.totalPages || -1;

    const refetchUpworkFeeds = () => {
        const searchParameters = createUpworkFeedsSearchParams(
            refetchSearchParams,
            totalKeywordsOptionsCount,
        );
        savedRefetchParams.current = searchParameters;

        getUpworkFeeds({
            searchParameters,
            ...(sortBy && { sortBy }),
            ...(sortDirection && { sortDirection }),
            pageSize,
            pageNumber: 1,
        });

        if (pageNumber > 1) {
            setPageNumber(1);
            shouldRefetch.current = false;
        }
    };

    return { data, refetchUpworkFeeds, totalItemsCount, totalPagesCount };
};

export default useUpworkFeedRequests;
