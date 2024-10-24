import { FC } from 'react';
import VacancyMatchedBlockItem from '../VacancyMatchedBlockItem';
import { IUpworkFeedMatchEntityDto } from '../../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-match-entity.dto';
import VacancyMatchedTable from '../VacancyMatchedTable';

interface VacancyMatchedBlogProps {
    caseData: IUpworkFeedMatchEntityDto;
}

const VacancyMatchedBlog: FC<VacancyMatchedBlogProps> = ({ caseData }) => {
    return (
        <VacancyMatchedBlockItem
            blockName="blogs"
            matchData={caseData}
            leftSideContent={<VacancyMatchedTable infoBlock={caseData.infoBlock} />}
        />
    );
};

export default VacancyMatchedBlog;
