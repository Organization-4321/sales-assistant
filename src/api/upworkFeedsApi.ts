import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './queries';
import { UpworkFeedsRoutesEnum } from '../interfaces-submodule/enums/routes/upwork-feeds-routes.enum';
import { IApiResponseGenericDTO } from '../interfaces-submodule/interfaces/dto/common/iapi-response.interface';
import { IUpworkResponseListFeedsDto } from '../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-response-list-feeds.dto';
import { IGetAllUpworkFeedRequest } from '../interfaces-submodule/interfaces/dto/upwork-feed/iget-all-upwork-feed-request.interface';
import { IUpworkFeedDetailItemDTO } from '../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-detail-item.dto';
import { IUpdateUpworkFeedDto } from '../interfaces-submodule/interfaces/dto/upwork-feed/iupdate-upwork-feed.dto';

export interface IGetAllUpworkFeedRequestWithPagination extends IGetAllUpworkFeedRequest {
    pageNumber: number;
    pageSize: number;
}

const upworkFeedsApi = createApi({
    reducerPath: UpworkFeedsRoutesEnum.BasePrefix,
    baseQuery: baseQueryWithReauth(UpworkFeedsRoutesEnum.BasePrefix),
    tagTypes: ['UpworkFeed'],
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
        getUpworkFeedById: builder.query<IApiResponseGenericDTO<IUpworkFeedDetailItemDTO>, string>({
            query: (feedId) => ({
                url: feedId,
                method: 'GET',
            }),
            providesTags: ['UpworkFeed'],
        }),
        updateUpworkFeed: builder.mutation<
            IApiResponseGenericDTO<IUpworkFeedDetailItemDTO>,
            { feedId: string; updateMatchesBody: IUpdateUpworkFeedDto }
        >({
            query: ({ feedId, updateMatchesBody }) => ({
                url: feedId,
                method: 'PUT',
                body: updateMatchesBody,
            }),
            invalidatesTags: ['UpworkFeed'],
        }),
    }),
});

export const { useGetUpworkFeedsMutation, useGetUpworkFeedByIdQuery, useUpdateUpworkFeedMutation } =
    upworkFeedsApi;

export default upworkFeedsApi;
