import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './queries';
import { UpworkFeedsRoutesEnum } from '../interfaces-submodule/enums/routes/upwork-feeds-routes.enum';

const upworkFeedsApi = createApi({
    reducerPath: UpworkFeedsRoutesEnum.BasePrefix,
    baseQuery: baseQueryWithReauth(UpworkFeedsRoutesEnum.BasePrefix),
    endpoints: (builder) => ({}),
});

export default upworkFeedsApi;
