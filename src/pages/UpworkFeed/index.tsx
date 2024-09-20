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
import moment, { MomentInput } from 'moment';
import UpworkKeywordsCell from './components/UpworkKeywordsCell';

interface UpworkFeedProps {}

const UpworkFeed: FC<UpworkFeedProps> = ({}) => {
    const [getUpworkFeeds, { data }] = useGetUpworkFeedsMutation();

    useEffect(() => {
        getUpworkFeeds({ pageSize: 5, pageNumber: 1 });
    }, []);

    const tableItems = data?.data.items.items;

    console.log(data);

    const scoresOptions = data?.data.scoreOptions ?? [];
    const keywordsOptions = data?.data.keywordsOptions ?? [];

    const columns: ColumnDef<IUpworkFeedItemDTO>[] = [
        {
            accessorKey: 'title',
            header: () => <UpworkTitleHeader title="Title" />,
            cell: ({ row }) => <Link>{row.original.title}</Link>,
        },
        {
            accessorKey: 'published',
            header: () => <UpworkPublishedHeader title="Published" />,
            cell: (info) => {
                const date = moment(info.getValue() as MomentInput);
                return date.format('MM/DD/YYYY HH:mm');
            },
        },
        {
            accessorKey: 'keywords',
            header: () => (
                <UpworkKeywordsHeader title="Keywords" keywordsOptions={keywordsOptions} />
            ),
            cell: ({ row }) => <UpworkKeywordsCell keywords={row.original.keywords} />,
        },
        {
            accessorKey: 'score',
            header: () => <UpworkScoreHeader title="Score" scoresOptions={scoresOptions} />,
            cell: ({ row }) => <Chip label={row.original.score} />,
        },
        {
            accessorKey: 'matchedCases',
            header: () => (
                <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
                    Matched cases
                </Typography>
            ),
            cell: ({ row }) => (
                <div style={{ textAlign: 'right' }}>{row.original.matchedCases}</div>
            ),
        },
        {
            accessorKey: 'matchedBlogs',
            header: () => (
                <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
                    Matched blogs
                </Typography>
            ),
            cell: ({ row }) => (
                <div style={{ textAlign: 'right' }}>{row.original.matchedBlogs}</div>
            ),
        },
    ];

    const refetchUpworkFeeds = () => {
        getUpworkFeeds({ pageSize: 5, pageNumber: 1 });
    };

    return (
        <div>
            <Button onClick={refetchUpworkFeeds}>Refetch RSS</Button>
            {tableItems && tableItems?.length > 0 && (
                <CustomTable data={tableItems} columns={columns} />
            )}
        </div>
    );
};

export default UpworkFeed;
