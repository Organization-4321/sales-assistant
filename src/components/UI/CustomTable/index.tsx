import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

interface ICustomTableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T>[];
    headerCellsVerticalAlign?: React.CSSProperties['verticalAlign'];
}

const CustomTable = <T extends object>({
    data,
    columns,
    headerCellsVerticalAlign,
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
                            <TableCell
                                key={header.id}
                                sx={{
                                    verticalAlign: headerCellsVerticalAlign,
                                }}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext(),
                                      )}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default CustomTable;
