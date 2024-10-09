import { ColumnDef } from '@tanstack/react-table';
import { IUpworkFeedItemDTO } from '../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-item.dto';
import { Link } from '@mui/material';
import moment, { MomentInput } from 'moment';
import UpworkKeywordsCell from '../components/UpworkKeywordsCell';
import UpworkReactionCell from '../components/UpworkReactionCell';
import UpworkScoreCell from '../components/UpworkScoreCell';

const createUpworkFeedTableColumns = (): ColumnDef<IUpworkFeedItemDTO>[] => [
    {
        accessorKey: 'title',
        cell: ({ row }) => <Link>{row.original.title}</Link>,
    },
    {
        accessorKey: 'published',
        cell: (info) => {
            const date = moment(info.getValue() as MomentInput);
            return date.format('MM/DD/YYYY HH:mm');
        },
    },
    {
        accessorKey: 'keywords',
        cell: ({ row }) =>
            row.original.keywords && <UpworkKeywordsCell keywords={row.original.keywords} />,
    },
    {
        accessorKey: 'score',
        cell: ({ row }) => row.original.score && <UpworkScoreCell score={row.original.score} />,
    },
    {
        accessorKey: 'review',
        cell: ({ row }) =>
            row.original.review && <UpworkReactionCell type={row.original.review.type} />,
    },
    {
        accessorKey: 'matchedCases',
        cell: ({ row }) => <div style={{ textAlign: 'right' }}>{row.original.matchedCases}</div>,
    },
    {
        accessorKey: 'matchedBlogs',
        cell: ({ row }) => <div style={{ textAlign: 'right' }}>{row.original.matchedBlogs}</div>,
    },
];

export default createUpworkFeedTableColumns;
