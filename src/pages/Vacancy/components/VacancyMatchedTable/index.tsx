import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { FC } from 'react';
import { IUpworkFeedMatchEntityDto } from '../../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-match-entity.dto';
import createVacancyMatchedTableCellValue from './createVacancyMatchedTableCellValue';

interface VacancyMatchedTableProps {
    infoBlock: IUpworkFeedMatchEntityDto['infoBlock'];
}

const VacancyMatchedTable: FC<VacancyMatchedTableProps> = ({ infoBlock }) => {
    if (!infoBlock) return null;

    return (
        <Table sx={{ tableLayout: 'auto' }}>
            <TableBody>
                {infoBlock
                    ?.filter((block) => block.value)
                    .map((block) => (
                        <TableRow key={block.key}>
                            <TableCell
                                style={{
                                    width: '1%',
                                    padding: 0,
                                    paddingRight: 8,
                                    border: 'none',
                                }}>
                                <Typography variant="body2" color="customGray.light">
                                    {block.key}:
                                </Typography>
                            </TableCell>
                            <TableCell style={{ padding: 0, border: 'none' }}>
                                {createVacancyMatchedTableCellValue(block.key, block.value)}
                            </TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
};

export default VacancyMatchedTable;
