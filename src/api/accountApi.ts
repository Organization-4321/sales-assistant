import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './queries';
import { AuthRoutes } from '../interfaces-submodule/enums/routes/auth-routes.enum';
import { IApiResponseGenericDTO } from '../interfaces-submodule/interfaces/dto/common/iapi-response.interface';
import { IAccountResponseDTO } from '../interfaces-submodule/interfaces/dto/account/iaccount-response.interfaces';
import { setUser } from '../store/slices/authSlice';

const accountApi = createApi({
    reducerPath: 'account',
    baseQuery: baseQueryWithReauth(AuthRoutes.BasePrefix),
    endpoints: (builder) => ({
        recoverUser: builder.query<IApiResponseGenericDTO<IAccountResponseDTO>, void>({
            query: () => ({
                url: AuthRoutes.RecoverUser,
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data.data.account));
                } catch (err) {
                    console.log(err);
                }
            },
        }),
    }),
});

export const { useRecoverUserQuery } = accountApi;

export default accountApi;
