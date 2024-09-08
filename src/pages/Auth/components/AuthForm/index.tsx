import { Button, Divider, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { FC, useState, useRef, ChangeEvent } from 'react';
import SalesAssistantIcon from '../../../../components/icons/SalesAssistantIcon';
import VisibilityIcon from '../../../../components/icons/VisibilityIcon';

interface AuthFormProps {}

const AuthForm: FC<AuthFormProps> = ({}) => {
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
                <Divider sx={{ fontWeight: 500, color: '#70737a' }}>or</Divider>
                <TextField placeholder="Email" />
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
                <Button color="primary" variant="outlined">
                    Log in
                </Button>
            </Stack>
        </Stack>
    );
};

export default AuthForm;
