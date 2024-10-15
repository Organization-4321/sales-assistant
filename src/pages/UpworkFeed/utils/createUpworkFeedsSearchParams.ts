import { UpworkFeedSearchBy } from '../../../interfaces-submodule/enums/upwork-feed/upwork-feed-search-by.enum';
import { ISearchParameterDTO } from '../../../interfaces-submodule/interfaces/dto/common/isearch-parameter.interface';
import { IUpworkFeedRefetchSearchParams } from '../hooks/useUpworkFeedRequests';

const createUpworkFeedsSearchParams = (
    refetchSearchParams: IUpworkFeedRefetchSearchParams,
    totalKeywordsOptionsCount: number,
) => {
    const {
        title,
        published,
        selectedKeywordsOptions,
        selectedScoresOptions,
        selectedReactionsOptions,
    } = refetchSearchParams;

    return [
        title && { searchBy: UpworkFeedSearchBy.Title, searchQuery: title },
        published && {
            searchBy: UpworkFeedSearchBy.Published,
            searchQuery: `${published.toISOString()} - ${new Date().toISOString()}`,
        },
        selectedKeywordsOptions.length > 0 &&
            totalKeywordsOptionsCount !== selectedKeywordsOptions.length && {
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
};

export default createUpworkFeedsSearchParams;
