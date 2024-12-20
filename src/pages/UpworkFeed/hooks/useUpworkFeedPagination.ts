import { useState } from 'react';

const useUpworkFeedPagination = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handlePageNumberChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

    const handlePageSizeChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setPageNumber(1);
        setPageSize(Number(event.target.value));
    };

    return { pageNumber, pageSize, handlePageNumberChange, handlePageSizeChange, setPageNumber };
};

export default useUpworkFeedPagination;
