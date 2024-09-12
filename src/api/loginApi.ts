import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthRoutes } from '../interfaces-submodule/enums/routes/auth-routes.enum';
import { ILoginRequestDTO } from '../interfaces-submodule/interfaces/dto/auth/iadmin-login-request.interface';
import { ILoginResponseDTO } from '../interfaces-submodule/interfaces/dto/auth/ilogin-response.interfaces';
import { IApiResponseGenericDTO } from '../interfaces-submodule/interfaces/dto/common/iapi-response.interface';
import { IAccountResponseDTO } from '../interfaces-submodule/interfaces/dto/account/iaccount-response.interfaces';
import { setUser } from '../store/slices/authSlice';

const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL + AuthRoutes.BasePrefix,
    }),
    endpoints: (builder) => ({
        login: builder.mutation<IApiResponseGenericDTO<ILoginResponseDTO>, ILoginRequestDTO>({
            query: ({ email, password }) => ({
                url: AuthRoutes.Login,
                method: 'POST',
                body: {
                    email,
                    password,
                },
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    const { accessToken, refreshToken } = data.data.access;

                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                } catch (err) {
                    console.error('Failed to store tokens:', err);
                }
            },
        }),
        recoverUser: builder.query<IApiResponseGenericDTO<IAccountResponseDTO>, void>({
            query: () => ({
                url: AuthRoutes.RecoverUser,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data.data.account));
                } catch (err) {}
            },
        }),
    }),
});

export const { useLoginMutation, useRecoverUserQuery } = loginApi;

export default loginApi;
