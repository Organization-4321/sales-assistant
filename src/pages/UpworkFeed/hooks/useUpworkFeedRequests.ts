import { useEffect } from 'react';
import { useGetUpworkFeedsMutation } from '../../../api/upworkFeedsApi';

const useUpworkFeedRequests = () => {
    const [getUpworkFeeds, { data }] = useGetUpworkFeedsMutation();

    useEffect(() => {
        getUpworkFeeds({ pageSize: 10, pageNumber: 1 });
    }, []);

    const refetchUpworkFeeds = () => {
        getUpworkFeeds({ pageSize: 5, pageNumber: 1 });
    };

    return { data, refetchUpworkFeeds };
};

export default useUpworkFeedRequests;
