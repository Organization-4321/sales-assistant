import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthRoutes } from '../interfaces-submodule/enums/routes/auth-routes.enum';
import { ILoginRequestDTO } from '../interfaces-submodule/interfaces/dto/auth/iadmin-login-request.interface';
import { ILoginResponseDTO } from '../interfaces-submodule/interfaces/dto/auth/ilogin-response.interfaces';

const loginApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL + AuthRoutes.BasePrefix,
    }),
    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponseDTO, ILoginRequestDTO>({
            query: ({ email, password }) => ({
                url: AuthRoutes.Login,
                method: 'POST',
                body: {
                    email,
                    password,
                },
            }),
        }),
    }),
});

export const { useLoginMutation } = loginApi;

export default loginApi;
