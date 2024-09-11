import { Alert, AlertTitle, List, ListItem } from '@mui/material';
import { FC } from 'react';

interface CustomAlertErrorProps {
    errors: string[] | string;
}

const CustomAlertError: FC<CustomAlertErrorProps> = ({ errors }) => {
    const errorMessages =
        typeof errors === 'string'
            ? errors
            : errors.map((error) => <ListItem key={error}>{error}</ListItem>);

    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <List>{errorMessages}</List>
        </Alert>
    );
};

export default CustomAlertError;
