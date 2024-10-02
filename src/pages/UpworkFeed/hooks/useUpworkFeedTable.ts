import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { IUpworkFeedItemDTO } from '../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-item.dto';
import createUpworkFeedTableColumns from '../utils/createUpworkFeedTableColumns';
import { IApiResponseGenericDTO } from '../../../interfaces-submodule/interfaces/dto/common/iapi-response.interface';
import { IUpworkResponseListFeedsDto } from '../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-response-list-feeds.dto';

const useUpworkFeedTable = (
    data: IApiResponseGenericDTO<IUpworkResponseListFeedsDto> | undefined,
) => {
    const tableItems = data?.data.items.items ?? [];

    const scoresOptions = data?.data.scoreOptions ?? [];
    const keywordsOptions = useMemo(() => data?.data.keywordsOptions ?? [], [data]);

    const columns: ColumnDef<IUpworkFeedItemDTO>[] = useMemo(
        () => createUpworkFeedTableColumns(),
        [],
    );

    return { tableItems, scoresOptions, keywordsOptions, columns };
};

export default useUpworkFeedTable;
