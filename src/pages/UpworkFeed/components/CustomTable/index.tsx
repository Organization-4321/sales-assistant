import { Table, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import UpworkTitleHeader from '../UpworkTitleHeader';
import UpworkPublishedHeader from '../UpworkPublishedHeader';
import UpworkKeywordsHeader from '../UpworkKeywordsHeader';
import UpworkScoreHeader from '../UpworkScoreHeader';
import MemoizedTableBody from './MemoizedTableBody';
import UpworkReactionHeader from '../UpworkReactionHeader';
import { UpworkFeedSortBy } from '../../../../interfaces-submodule/enums/upwork-feed/upwork-feed-sort-by.enum';
import { ICustomTableProps } from '../../types/custom-table-props.types';
import UpworkFeedSortableHeader from '../UpworkFeedSortableHeader';

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
                                            <UpworkFeedSortableHeader
                                                title="Title"
                                                isSortedBy={sortBy === UpworkFeedSortBy.Title}
                                                sortBy={UpworkFeedSortBy.Title}
                                                handleSetSortBy={handleSetSortBy}
                                                sortDirection={sortDirection}>
                                                <UpworkTitleHeader
                                                    inputValue={title}
                                                    setInputValue={setTitle}
                                                />
                                            </UpworkFeedSortableHeader>
                                        ),
                                        published: (
                                            <UpworkFeedSortableHeader
                                                title="Published"
                                                isSortedBy={sortBy === UpworkFeedSortBy.Published}
                                                sortBy={UpworkFeedSortBy.Published}
                                                handleSetSortBy={handleSetSortBy}
                                                sortDirection={sortDirection}>
                                                <UpworkPublishedHeader
                                                    date={published}
                                                    setDate={setPublished}
                                                />
                                            </UpworkFeedSortableHeader>
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
                                            <UpworkFeedSortableHeader
                                                title="Score"
                                                isSortedBy={sortBy === UpworkFeedSortBy.Score}
                                                sortBy={UpworkFeedSortBy.Score}
                                                handleSetSortBy={handleSetSortBy}
                                                sortDirection={sortDirection}>
                                                <UpworkScoreHeader
                                                    scoresOptions={scoresOptions}
                                                    selectedOptions={selectedScoresOptions}
                                                    setSelectedOptions={setSelectedScoresOptions}
                                                />
                                            </UpworkFeedSortableHeader>
                                        ),
                                        review: (
                                            <UpworkFeedSortableHeader
                                                title="Reaction"
                                                isSortedBy={sortBy === UpworkFeedSortBy.Review}
                                                sortBy={UpworkFeedSortBy.Review}
                                                handleSetSortBy={handleSetSortBy}
                                                sortDirection={sortDirection}>
                                                <UpworkReactionHeader
                                                    options={reactionsOptions}
                                                    selectedOptions={selectedReactionsOptions}
                                                    setSelectedOptions={setSelectedReactionsOptions}
                                                />
                                            </UpworkFeedSortableHeader>
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
