import { Typography } from '@mui/material';
import moment from 'moment';

const createVacancyMatchedTableCellValue = (key: string, value: string) => {
    let renderValue = null;

    switch (key) {
        case 'Tags':
            renderValue = value
                .split(', ')
                .map((tag) => `#${tag}`)
                .join(', ');
            break;
        case 'Published':
            renderValue = moment(value).format('DD MMM YYYY');
            break;
        default:
            renderValue = value;
    }

    return (
        <Typography variant="body2" color="text.secondary">
            {renderValue}
        </Typography>
    );
};

export default createVacancyMatchedTableCellValue;
