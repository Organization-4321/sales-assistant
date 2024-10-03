import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './queries';
import { UpworkFeedsRoutesEnum } from '../interfaces-submodule/enums/routes/upwork-feeds-routes.enum';
import { IApiResponseGenericDTO } from '../interfaces-submodule/interfaces/dto/common/iapi-response.interface';
import { IUpworkResponseListFeedsDto } from '../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-response-list-feeds.dto';
import { IGetAllUpworkFeedRequest } from '../interfaces-submodule/interfaces/dto/upwork-feed/iget-all-upwork-feed-request.interface';

export interface IGetAllUpworkFeedRequestWithPagination extends IGetAllUpworkFeedRequest {
    pageNumber: number;
    pageSize: number;
}

const upworkFeedsApi = createApi({
    reducerPath: UpworkFeedsRoutesEnum.BasePrefix,
    baseQuery: baseQueryWithReauth(UpworkFeedsRoutesEnum.BasePrefix),
    endpoints: (builder) => ({
        getUpworkFeeds: builder.mutation<
            IApiResponseGenericDTO<IUpworkResponseListFeedsDto>,
            IGetAllUpworkFeedRequestWithPagination
        >({
            query: (requestBody) => ({
                url: UpworkFeedsRoutesEnum.GetFeeds,
                method: 'POST',
                body: requestBody,
            }),
        }),
    }),
});

export const { useGetUpworkFeedsMutation } = upworkFeedsApi;

export default upworkFeedsApi;
