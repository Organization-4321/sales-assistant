import { FC, useEffect, useMemo, useState } from 'react';
import { useGetUpworkFeedsMutation } from '../../api/upworkFeedsApi';
import CustomTable from './components/CustomTable';
import { Button } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import { IUpworkFeedItemDTO } from '../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-item.dto';
import createUpworkFeedTableColumns from './utils/createUpworkFeedTableColumns';
import { IOptionInterface } from '../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import { UpworkFeedSearchBy } from '../../interfaces-submodule/enums/upwork-feed/upwork-feed-search-by.enum';

interface UpworkFeedProps {}

const UpworkFeed: FC<UpworkFeedProps> = ({}) => {
    const [title, setTitle] = useState('');
    const [published, setPublished] = useState<Date | null>(new Date());
    const [selectedKeywordsOptions, setSelectedKeywordsOptions] = useState<IOptionInterface[]>([]);
    const [selectedScoresOptions, setSelectedScoresOptions] = useState<IOptionInterface[]>([]);

    const [getUpworkFeeds, { data }] = useGetUpworkFeedsMutation();

    useEffect(() => {
        getUpworkFeeds({ pageSize: 5, pageNumber: 1 });
    }, []);

    const tableItems = data?.data.items.items ?? [];

    console.log(data);

    const scoresOptions = data?.data.scoreOptions ?? [];
    const keywordsOptions = useMemo(() => data?.data.keywordsOptions ?? [], [data]);

    const columns: ColumnDef<IUpworkFeedItemDTO>[] = useMemo(
        () => createUpworkFeedTableColumns(),
        [],
    );

    const refetchUpworkFeeds = () => {
        getUpworkFeeds({ pageSize: 5, pageNumber: 1 });
    };

    return (
        <div>
            <Button onClick={refetchUpworkFeeds}>Refetch RSS</Button>
            <CustomTable
                data={tableItems}
                columns={columns}
                title={title}
                setTitle={setTitle}
                keywordsOptions={keywordsOptions}
                scoresOptions={scoresOptions}
                selectedKeywordsOptions={selectedKeywordsOptions}
                setSelectedKeywordsOptions={setSelectedKeywordsOptions}
                selectedScoresOptions={selectedScoresOptions}
                setSelectedScoresOptions={setSelectedScoresOptions}
                published={published}
                setPublished={setPublished}
            />
        </div>
    );
};

export default UpworkFeed;
