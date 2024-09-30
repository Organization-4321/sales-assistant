import { ColumnDef } from '@tanstack/react-table';
import { IUpworkFeedItemDTO } from '../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-item.dto';
import { Chip, Link } from '@mui/material';
import moment, { MomentInput } from 'moment';
import UpworkKeywordsCell from '../components/UpworkKeywordsCell';

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
        cell: ({ row }) => <UpworkKeywordsCell keywords={row.original.keywords} />,
    },
    {
        accessorKey: 'score',
        cell: ({ row }) => <Chip label={row.original.score} />,
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
