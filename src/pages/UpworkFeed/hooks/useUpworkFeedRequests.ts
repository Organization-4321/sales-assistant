import { useEffect } from 'react';
import { useGetUpworkFeedsMutation } from '../../../api/upworkFeedsApi';
import { UpworkFeedSearchBy } from '../../../interfaces-submodule/enums/upwork-feed/upwork-feed-search-by.enum';
import { ISearchParameterDTO } from '../../../interfaces-submodule/interfaces/dto/common/isearch-parameter.interface';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';

interface IUpworkFeedRefetchSearchParams {
    title: string;
    published: Date | null;
    selectedKeywordsOptions: IOptionInterface[];
    selectedScoresOptions: IOptionInterface[];
}

const useUpworkFeedRequests = (refetchSearchParams: IUpworkFeedRefetchSearchParams) => {
    const [getUpworkFeeds, { data }] = useGetUpworkFeedsMutation();

    useEffect(() => {
        getUpworkFeeds({ pageSize: 10, pageNumber: 1 });
    }, []);

    const refetchUpworkFeeds = () => {
        const { title, published, selectedKeywordsOptions, selectedScoresOptions } =
            refetchSearchParams;

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
        ].reduce<ISearchParameterDTO<UpworkFeedSearchBy>[]>((acc, param) => {
            if (param) acc.push(param);
            return acc;
        }, []);

        getUpworkFeeds({
            searchParameters,
            pageSize: 10,
            pageNumber: 1,
        });
    };

    return { data, refetchUpworkFeeds };
};

export default useUpworkFeedRequests;
