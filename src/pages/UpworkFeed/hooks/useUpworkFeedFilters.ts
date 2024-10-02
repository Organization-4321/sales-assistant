import { useState } from 'react';
import { IOptionInterface } from '../../../interfaces-submodule/interfaces/dto/common/ioption.interface';

const useUpworkFeedFilters = () => {
    const [title, setTitle] = useState('');
    const [published, setPublished] = useState<Date | null>(null);
    const [selectedKeywordsOptions, setSelectedKeywordsOptions] = useState<IOptionInterface[]>([]);
    const [selectedScoresOptions, setSelectedScoresOptions] = useState<IOptionInterface[]>([]);

    return {
        title,
        setTitle,
        published,
        setPublished,
        selectedKeywordsOptions,
        setSelectedKeywordsOptions,
        selectedScoresOptions,
        setSelectedScoresOptions,
    };
};

export default useUpworkFeedFilters;
