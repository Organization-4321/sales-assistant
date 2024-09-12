import { configureStore } from '@reduxjs/toolkit';
import authApi from '../api/authApi';
import currentUserReducer from './slices/currentUserSlice';
import { useDispatch } from 'react-redux';
import accountApi from '../api/accountApi';

export const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([authApi.middleware, accountApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
