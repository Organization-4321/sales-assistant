import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthRoutes } from '../interfaces-submodule/enums/routes/auth-routes.enum';
import { ILoginRequestDTO } from '../interfaces-submodule/interfaces/dto/auth/iadmin-login-request.interface';
import { ILoginResponseDTO } from '../interfaces-submodule/interfaces/dto/auth/ilogin-response.interfaces';
import { IApiResponseGenericDTO } from '../interfaces-submodule/interfaces/dto/common/iapi-response.interface';
import AuthTokensService from '../services/AuthTokensService';

const authApi = createApi({
    reducerPath: AuthRoutes.BasePrefix,
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

                    AuthTokensService.setTokens(accessToken, refreshToken);
                } catch (err) {
                    console.error('Failed to store tokens:', err);
                }
            },
        }),
        refreshToken: builder.mutation<IApiResponseGenericDTO<ILoginResponseDTO>, void>({
            query: () => ({
                url: AuthRoutes.RefreshToken,
                method: 'PUT',
                body: { token: AuthTokensService.getRefreshToken() },
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;

                    const { accessToken, refreshToken } = data.data.access;

                    AuthTokensService.setTokens(accessToken, refreshToken);
                } catch (err) {
                    console.error('Failed to store tokens:', err);
                }
            },
        }),
    }),
});

export const { useLoginMutation } = authApi;

export default authApi;
