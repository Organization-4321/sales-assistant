import { Chip, Grid } from '@mui/material';
import { FC } from 'react';

interface UpworkKeywordsCellProps {
    keywords: string[];
}

const UpworkKeywordsCell: FC<UpworkKeywordsCellProps> = ({ keywords }) => {
    return (
        <Grid container spacing={0.5} wrap="wrap">
            {keywords.map((keyword) => (
                <Grid item key={keyword}>
                    <Chip key={keyword} label={keyword} />
                </Grid>
            ))}
        </Grid>
    );
};

export default UpworkKeywordsCell;
