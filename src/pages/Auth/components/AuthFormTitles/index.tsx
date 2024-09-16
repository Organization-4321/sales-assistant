import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import SalesAssistantIcon from '../../../../components/icons/SalesAssistantIcon';

interface AuthFormTitlesProps {}

const AuthFormTitles: FC<AuthFormTitlesProps> = ({}) => {
    return (
        <Stack direction="column" alignItems="center">
            <Stack direction="row" alignItems="center" gap={1.5}>
                <SalesAssistantIcon />
                <Typography variant="h5" fontWeight="600">
                    Sales assistant
                </Typography>
            </Stack>
            <Typography variant="h4" align="center" margin={5}>
                Login
            </Typography>
        </Stack>
    );
};

export default AuthFormTitles;
