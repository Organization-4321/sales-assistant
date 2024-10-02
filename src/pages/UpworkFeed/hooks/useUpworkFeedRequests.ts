import { useEffect } from 'react';
import { useGetUpworkFeedsMutation } from '../../../api/upworkFeedsApi';
import { UpworkFeedSearchBy } from '../../../interfaces-submodule/enums/upwork-feed/upwork-feed-search-by.enum';
import { ISearchParameterDTO } from '../../../interfaces-submodule/interfaces/dto/common/isearch-parameter.interface';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import { UpworkFeedSortBy } from '../../../interfaces-submodule/enums/upwork-feed/upwork-feed-sort-by.enum';
import { SortDirection } from '../../../interfaces-submodule/enums/common/sort-direction.enum';

interface IUpworkFeedRefetchSearchParams {
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
        const {
            title,
            published,
            selectedKeywordsOptions,
            selectedScoresOptions,
            selectedReactionsOptions,
        } = refetchSearchParams;

        const searchParameters = [
            title && { searchBy: UpworkFeedSearchBy.Title, searchQuery: title },
            published && {
                searchBy: UpworkFeedSearchBy.Published,
                searchQuery: `${published.toISOString()} - ${new Date().toISOString()}`,
            },
            selectedKeywordsOptions.length > 0 && {
                searchBy: UpworkFeedSearchBy.Keywords,
                searchQuery: selectedKeywordsOptions.map((option) => option.value),
            },
            selectedScoresOptions.length > 0 && {
                searchBy: UpworkFeedSearchBy.Score,
                searchQuery: selectedScoresOptions.map((option) => option.value),
            },
            selectedReactionsOptions.length > 0 && {
                searchBy: UpworkFeedSearchBy.Review,
                searchQuery: selectedReactionsOptions.map((option) => option.value),
            },
        ].reduce<ISearchParameterDTO<UpworkFeedSearchBy>[]>((acc, param) => {
            if (param) acc.push(param);
            return acc;
        }, []);

        getUpworkFeeds({
            searchParameters,
            ...(sortBy && { sortBy }),
            ...(sortDirection && { sortDirection }),
            pageSize: 10,
            pageNumber: 1,
        });
    };

    return { data, refetchUpworkFeeds };
};

export default useUpworkFeedRequests;
