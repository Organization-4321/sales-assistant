import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useLoginMutation } from '../../../api/authApi';
import { useAppDispatch } from '../../../store';
import { setUser } from '../../../store/slices/currentUserSlice';

const useAuthForm = () => {
    const [login, { error }] = useLoginMutation();
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');

    const passwordRef = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState('');

    const showPasswordVisibilityIcon = password.length > 0;

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

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const responseData = await login({ email, password }).unwrap();
            dispatch(setUser(responseData.data.account));
        } catch (err) {
            console.error(err);
        }
    };

    return {
        password,
        passwordRef,
        login,
        error,
        email,
        showPasswordVisibilityIcon,
        handleChangePassword,
        toggleShowPassword,
        handleChangeEmail,
        handleFormSubmit,
    };
};

export default useAuthForm;
