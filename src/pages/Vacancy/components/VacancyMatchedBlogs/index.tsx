import { FC } from 'react';
import VacancyInfoCard from '../VacancyInfoCard';
import { IUpworkFeedMatchEntityDto } from '../../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-match-entity.dto';
import VacancyMatchedBlog from './VacancyMatchedBlog';

interface VacancyMatchedBlogsProps {
    blogsData: IUpworkFeedMatchEntityDto[];
}

const VacancyMatchedBlogs: FC<VacancyMatchedBlogsProps> = ({ blogsData }) => {
    return (
        <VacancyInfoCard title="Matched blogs">
            {blogsData?.map((blogData, idx) => (
                <VacancyMatchedBlog key={idx} caseData={blogData} />
            ))}
        </VacancyInfoCard>
    );
};

export default VacancyMatchedBlogs;
