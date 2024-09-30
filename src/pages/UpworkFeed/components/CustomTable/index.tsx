import { Table, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { IOptionInterface } from '../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';
import UpworkTitleHeader from '../UpworkTitleHeader';
import UpworkPublishedHeader from '../UpworkPublishedHeader';
import UpworkKeywordsHeader from '../UpworkKeywordsHeader';
import UpworkScoreHeader from '../UpworkScoreHeader';
import MemoizedTableBody from './MemoizedTableBody';

interface ICustomTableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T>[];
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    keywordsOptions: IOptionInterface[];
    scoresOptions: IOptionInterface[];
    selectedKeywordsOptions: IOptionInterface[];
    setSelectedKeywordsOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
    selectedScoresOptions: IOptionInterface[];
    setSelectedScoresOptions: React.Dispatch<React.SetStateAction<IOptionInterface[]>>;
    published: Date | null;
    setPublished: React.Dispatch<React.SetStateAction<Date | null>>;
}

const CustomTable = <T extends object>({
    data,
    columns,
    title,
    setTitle,
    keywordsOptions,
    scoresOptions,
    selectedKeywordsOptions,
    setSelectedKeywordsOptions,
    selectedScoresOptions,
    setSelectedScoresOptions,
    published,
    setPublished,
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
