import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface VacancyInfoCardProps {
    title: string;
    children: React.ReactNode;
}

const VacancyInfoCard: FC<VacancyInfoCardProps> = ({ title, children }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={(theme) => ({
                border: `1px solid ${theme.palette.mode === 'dark' ? '#414752' : '#d5d7db'}`,
                borderRadius: '16px',
                padding: theme.spacing(1, 2, 3, 2),
            })}>
            <Typography variant="subtitle2" sx={{ py: 1, marginLeft: 0.5 }}>
                {title}
            </Typography>
            {children}
        </Box>
    );
};

export default VacancyInfoCard;
