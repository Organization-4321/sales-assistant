import { ColumnDef } from '@tanstack/react-table';
import { IUpworkFeedItemDTO } from '../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-item.dto';
import moment, { MomentInput } from 'moment';
import UpworkKeywordsCell from '../components/UpworkKeywordsCell';
import UpworkReactionCell from '../components/UpworkReactionCell';
import UpworkScoreCell from '../components/UpworkScoreCell';
import RouterLink from '../../../components/UI/RouterLink';

const createUpworkFeedTableColumns = (): ColumnDef<IUpworkFeedItemDTO>[] => [
    {
        accessorKey: 'title',
        cell: ({ row }) => (
            <RouterLink to={row.original.id || '/'}>{row.original.title}</RouterLink>
        ),
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
