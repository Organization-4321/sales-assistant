import { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import ClearIcon from '../../../../components/icons/ClearIcon';

type IUpworkFeedInputProps = TextFieldProps & {
    onClearIconClick?: () => void;
};

const UpworkFeedInput: FC<IUpworkFeedInputProps> = ({ onClearIconClick, ...otherProps }) => {
    return (
        <TextField
            fullWidth
            autoComplete="off"
            InputProps={{
                sx(theme) {
                    return { height: theme.spacing(5.5) };
                },
                endAdornment: !!otherProps.value && (
                    <ClearIcon
                        sx={{ height: 18, width: 18, cursor: 'pointer' }}
                        onClick={onClearIconClick}
                    />
                ),
            }}
            {...otherProps}
        />
    );
};

export default UpworkFeedInput;
