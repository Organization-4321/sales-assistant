import { memo } from 'react';
import { flexRender, Row } from '@tanstack/react-table';
import { TableBody, TableCell, TableRow } from '@mui/material';

type MemoizedTableBodyProps<T> = {
    rows: Row<T>[];
};

const MemoizedTableBody = memo(<T,>({ rows }: MemoizedTableBodyProps<T>) => {
    return (
        <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    );
});

export default MemoizedTableBody;
