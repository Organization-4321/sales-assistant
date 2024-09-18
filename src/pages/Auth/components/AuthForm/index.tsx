import { Button, Divider, InputAdornment, Stack, TextField } from '@mui/material';
import { FC } from 'react';
import { getResponseErrorMessage } from '../../../../utils/getResponseErrorMessage';
import VisibilityIcon from '../../../../components/icons/VisibilityIcon';
import CustomAlertError from '../../../../components/UI/CustomAlertError';
import MicrosoftIcon from '../../../../components/icons/MicrosoftIcon';
import useAuthForm from '../../hooks/useAuthForm';

interface AuthFormProps {}

const AuthForm: FC<AuthFormProps> = ({}) => {
    const {
        password,
        showVisibiltyIcon,
        passwordRef,
        error,
        handleChangePassword,
        handleChangeEmail,
        toggleShowPassword,
        handleFormSubmit,
    } = useAuthForm();

    return (
        <form onSubmit={handleFormSubmit}>
            <Stack direction="column" gap={2}>
                <Button startIcon={<MicrosoftIcon />}>Continue with Microsoft</Button>
                {error && <CustomAlertError errors={getResponseErrorMessage(error)} />}
                <Divider>or</Divider>
                <TextField placeholder="Email" onChange={handleChangeEmail} />
                <TextField
                    inputRef={passwordRef}
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    InputProps={{
                        endAdornment: showVisibiltyIcon && (
                            <InputAdornment position="start" onClick={toggleShowPassword}>
                                <VisibilityIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button type="submit" color="primary" variant="outlined">
                    Log in
                </Button>
            </Stack>
        </form>
    );
};

export default AuthForm;
