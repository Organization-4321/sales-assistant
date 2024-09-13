import { Button, Divider, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { FC, useState, useRef, ChangeEvent } from 'react';
import SalesAssistantIcon from '../../../../components/icons/SalesAssistantIcon';
import VisibilityIcon from '../../../../components/icons/VisibilityIcon';
import { useLoginMutation } from '../../../../api/authApi';
import { useAppDispatch } from '../../../../store';
import { setUser } from '../../../../store/slices/currentUserSlice';
import { getResponseErrorMessage } from '../../../../utils/getResponseErrorMessage';
import CustomAlertError from '../../../../components/UI/CustomAlertError';
interface AuthFormProps {}

const AuthForm: FC<AuthFormProps> = ({}) => {
    const [login, { error }] = useLoginMutation();
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');

    const passwordRef = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState('');

    const showVisibiltyIcon = password.length > 0;

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const toggleShowPassword = () => {
        if (passwordRef.current)
            passwordRef.current.type === 'text'
                ? (passwordRef.current.type = 'password')
                : (passwordRef.current.type = 'text');
    };

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleLoginClick = async () => {
        try {
            const responseData = await login({ email, password }).unwrap();
            dispatch(setUser(responseData.data.account));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Stack direction="column">
            <Stack direction="column" alignItems="center">
                <Stack direction="row" alignItems="center" gap={1.5}>
                    <SalesAssistantIcon />
                    <Typography variant="h5" fontWeight="600">
                        Sales assistant
                    </Typography>
                </Stack>
            </Stack>
            <Typography variant="h4" align="center" margin={5}>
                Login
            </Typography>
            <Stack direction="column" gap={2}>
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
                <Button color="primary" variant="outlined" onClick={handleLoginClick}>
                    Log in
                </Button>
            </Stack>
        </Stack>
    );
};

export default AuthForm;
