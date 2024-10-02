import { ColumnDef } from '@tanstack/react-table';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import { UpworkFeedSortBy } from '../../../interfaces-submodule/enums/upwork-feed/upwork-feed-sort-by.enum';
import { SortDirection } from '../../../interfaces-submodule/enums/common/sort-direction.enum';

export interface ICustomTableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T>[];
    titleProps: TitleProps;
    filterProps: FilterProps;
    sortProps: SortProps;
}

interface TitleProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}

interface FilterProps {
    keywordsOptions: IOptionInterface[];
    scoresOptions: IOptionInterface[];
    selectedKeywordsOptions: IOptionInterface[];
    setSelectedKeywordsOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
    selectedScoresOptions: IOptionInterface[];
    setSelectedScoresOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
    published: Date | null;
    setPublished: React.Dispatch<React.SetStateAction<Date | null>>;
    reactionsOptions: IOptionInterface[];
    selectedReactionsOptions: IOptionInterface[];
    setSelectedReactionsOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
}

interface SortProps {
    sortBy?: UpworkFeedSortBy | null;
    handleSetSortBy: (nextSortBy: UpworkFeedSortBy) => void;
    sortDirection?: SortDirection | null;
}
