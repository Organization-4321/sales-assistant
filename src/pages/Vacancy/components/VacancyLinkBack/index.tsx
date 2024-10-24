import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import RouterLink from '../../../../components/UI/RouterLink';
import { APP_ROUTES } from '../../../../routes/app-routes.enum';

interface VacancyLinkBackProps {}

const VacancyLinkBack: FC<VacancyLinkBackProps> = ({}) => {
    return (
        <Box display="flex" alignItems="center" gap={1} mb={0.5}>
            <RouterLink to={APP_ROUTES.UPWORK_FEED} variant="body2" sx={{ fontWeight: 500 }}>
                Upwork Feed
            </RouterLink>
            <Typography variant="body2" color="customGray.light">
                {'>'}
            </Typography>
        </Box>
    );
};

export default VacancyLinkBack;
