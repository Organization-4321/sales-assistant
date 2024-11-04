import { useState } from 'react';

const useExpandBlock = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return { isExpanded, handleToggleExpanded };
};

export default useExpandBlock;
