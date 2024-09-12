import { configureStore } from '@reduxjs/toolkit';
import loginApi from '../api/loginApi';
import currentUserReducer from './slices/currentUserSlice';
import { useDispatch } from 'react-redux';
import accountApi from '../api/accountApi';

export const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([loginApi.middleware, accountApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
