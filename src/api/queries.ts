import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import authApi from './authApi';
import { clearUser } from '../store/slices/currentUserSlice';

export const baseQueryWithAccessToken = (path: string) =>
    fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_API_URL}${path}`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');

            if (token) headers.set('Authorization', `Bearer ${token}`);
            return headers;
        },
    });

export const baseQueryWithReauth: (
    path: string,
) => BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
    (path) => async (args, api, extraOptions) => {
        const baseQuery = baseQueryWithAccessToken(path);

        let result = await baseQuery(args, api, extraOptions);

        if (result.error) {
            const status = result.error.status;

            if (status === 401 || status === 403) {
                const refreshResult = await api.dispatch(authApi.endpoints.refreshToken.initiate());

                if (refreshResult.error) {
                    console.error('Tokens update error');
                    api.dispatch(clearUser());
                } else result = await baseQuery(args, api, extraOptions);
            } else {
                console.error(result.error);
            }
        }

        return result;
    };
