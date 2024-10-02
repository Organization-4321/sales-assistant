import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { IUpworkFeedItemDTO } from '../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-item.dto';
import createUpworkFeedTableColumns from '../utils/createUpworkFeedTableColumns';
import { IApiResponseGenericDTO } from '../../../interfaces-submodule/interfaces/dto/common/iapi-response.interface';
import { IUpworkResponseListFeedsDto } from '../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-response-list-feeds.dto';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';

const useUpworkFeedTable = (
    data: IApiResponseGenericDTO<IUpworkResponseListFeedsDto> | undefined,
) => {
    const tableItems = data?.data.items.items ?? [];

    const scoresOptions = data?.data.scoreOptions ?? [];
    const keywordsOptions = useMemo(() => data?.data.keywordsOptions ?? [], [data]);

    const reactionsOptions: IOptionInterface[] = [
        { label: 'Like', value: 'Like' },
        { label: 'Dislike', value: 'Dislike' },
    ];

    const columns: ColumnDef<IUpworkFeedItemDTO>[] = useMemo(
        () => createUpworkFeedTableColumns(),
        [],
    );

    return { tableItems, scoresOptions, keywordsOptions, reactionsOptions, columns };
};

export default useUpworkFeedTable;
