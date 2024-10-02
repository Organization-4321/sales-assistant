import { Table, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import UpworkTitleHeader from '../UpworkTitleHeader';
import UpworkPublishedHeader from '../UpworkPublishedHeader';
import UpworkKeywordsHeader from '../UpworkKeywordsHeader';
import UpworkScoreHeader from '../UpworkScoreHeader';
import MemoizedTableBody from './MemoizedTableBody';
import UpworkReactionHeader from '../UpworkReactionHeader';
import { ICustomTableProps } from '../../types/custom-table-props.types';

const CustomTable = <T extends object>({
    data,
    columns,
    titleProps: { title, setTitle },
    filterProps: {
        keywordsOptions,
        scoresOptions,
        selectedKeywordsOptions,
        setSelectedKeywordsOptions,
        selectedScoresOptions,
        setSelectedScoresOptions,
        published,
        setPublished,
        reactionsOptions,
        selectedReactionsOptions,
        setSelectedReactionsOptions,
    },
    sortProps: { sortBy, handleSetSortBy, sortDirection },
}: ICustomTableProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Table>
            <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <TableCell key={header.id}>
                                {
                                    {
                                        title: (
                                            <UpworkTitleHeader
                                                title="Title"
                                                inputValue={title}
                                                setInputValue={setTitle}
                                            />
                                        ),
                                        published: (
                                            <UpworkPublishedHeader
                                                title="Published"
                                                date={published}
                                                setDate={setPublished}
                                            />
                                        ),
                                        keywords: (
                                            <UpworkKeywordsHeader
                                                title="Keywords"
                                                keywordsOptions={keywordsOptions}
                                                selectedOptions={selectedKeywordsOptions}
                                                setSelectedOptions={setSelectedKeywordsOptions}
                                            />
                                        ),
                                        score: (
                                            <UpworkScoreHeader
                                                title="Score"
                                                scoresOptions={scoresOptions}
                                                selectedOptions={selectedScoresOptions}
                                                setSelectedOptions={setSelectedScoresOptions}
                                            />
                                        ),
                                        review: (
                                            <UpworkReactionHeader
                                                title="Reaction"
                                                options={reactionsOptions}
                                                selectedOptions={selectedReactionsOptions}
                                                setSelectedOptions={setSelectedReactionsOptions}
                                            />
                                        ),
                                        matchedCases: (
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ textAlign: 'right' }}>
                                                Matched cases
                                            </Typography>
                                        ),
                                        matchedBlogs: (
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ textAlign: 'right' }}>
                                                Matched blogs
                                            </Typography>
                                        ),
                                    }[header.column.id]
                                }
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <MemoizedTableBody rows={table.getRowModel().rows} />
        </Table>
    );
};

export default CustomTable;
