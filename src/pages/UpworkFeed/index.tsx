import { FC, useEffect } from 'react';
import { useGetUpworkFeedsMutation } from '../../api/upworkFeedsApi';
import { ColumnDef } from '@tanstack/react-table';
import { IUpworkFeedItemDTO } from '../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-item.dto';
import CustomTable from '../../components/UI/CustomTable';
import { Button, Chip, Link, Typography } from '@mui/material';
import UpworkTitleHeader from './components/UpworkTitleHeader';
import UpworkPublishedHeader from './components/UpworkPublishedHeader';
import UpworkScoreHeader from './components/UpworkScoreHeader';
import UpworkKeywordsHeader from './components/UpworkKeywordsHeader';

interface UpworkFeedProps {}

const UpworkFeed: FC<UpworkFeedProps> = ({}) => {
    const [getUpworkFeeds, { data }] = useGetUpworkFeedsMutation();

    useEffect(() => {
        getUpworkFeeds({ pageSize: 5, pageNumber: 1 });
    }, []);

    const tableItems = data?.data.items.items;

    const scoresOptions = data?.data.scoreOptions ?? [];
    const keywordsOptions = data?.data.keywordsOptions ?? [];

    const columns: ColumnDef<IUpworkFeedItemDTO>[] = [
        {
            accessorKey: 'title',
            header: (info) => <UpworkTitleHeader id={info.column.id} />,
            cell: ({ row }) => <Link>{row.original.title}</Link>,
        },
        {
            accessorKey: 'published',
            header: (info) => <UpworkPublishedHeader id={info.column.id} />,
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: 'keywords',
            header: (info) => (
                <UpworkKeywordsHeader id={info.column.id} keywordsOptions={keywordsOptions} />
            ),
            cell: ({ row }) =>
                row.original.keywords.map((keyword) => <Chip key={keyword} label={keyword} />),
        },
        {
            accessorKey: 'score',
            header: (info) => (
                <UpworkScoreHeader id={info.column.id} scoresOptions={scoresOptions} />
            ),
            cell: ({ row }) => <Chip label={row.original.score} />,
        },
        {
            accessorKey: 'matchedCases',
            header: (info) => <Typography>{info.column.id}</Typography>,
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: 'matchedBlogs',
            header: (info) => <Typography>{info.column.id}</Typography>,
            cell: (info) => info.getValue(),
        },
    ];

    const refetchUpworkFeeds = () => {
        getUpworkFeeds({ pageSize: 5, pageNumber: 1 });
    };

    return (
        <div>
            <Button onClick={refetchUpworkFeeds}>Refetch RSS</Button>
            {tableItems && tableItems?.length > 0 && (
                <CustomTable data={tableItems} columns={columns} headerCellsVerticalAlign="top" />
            )}
        </div>
    );
};

export default UpworkFeed;
