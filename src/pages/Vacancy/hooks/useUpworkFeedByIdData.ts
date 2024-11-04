import { useGetUpworkFeedByIdQuery } from '../../../api/upworkFeedsApi';

const useUpworkFeedByIdData = (id: string) => {
    const { data, ...others } = useGetUpworkFeedByIdQuery(id);

    const upworkFeedData = data?.data;

    return {
        upworkFeedData,
        ...others,
    };
};

export default useUpworkFeedByIdData;
