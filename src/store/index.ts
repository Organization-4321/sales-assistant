import { configureStore } from '@reduxjs/toolkit';
import authApi from '../api/authApi';
import currentUserReducer from './slices/currentUserSlice';
import { useDispatch } from 'react-redux';
import accountApi from '../api/accountApi';
import upworkFeedsApi from '../api/upworkFeedsApi';
import chatsApi from '../api/chatsApi';
import chatMessagesApi from '../api/chatMessagesApi';

export const store = configureStore({
    reducer: {
        currentUser: currentUserReducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [upworkFeedsApi.reducerPath]: upworkFeedsApi.reducer,
        [chatsApi.reducerPath]: chatsApi.reducer,
        [chatMessagesApi.reducerPath]: chatMessagesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat([
            authApi.middleware,
            accountApi.middleware,
            upworkFeedsApi.middleware,
            chatsApi.middleware,
            chatMessagesApi.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
