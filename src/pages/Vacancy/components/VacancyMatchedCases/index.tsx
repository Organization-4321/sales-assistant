import { FC } from 'react';
import { IUpworkFeedMatchEntityDto } from '../../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-match-entity.dto';
import VacancyMatchedCase from './VacancyMatchedCase';
import VacancyInfoCard from '../VacancyInfoCard';

interface VacancyMatchedCasesProps {
    casesData: IUpworkFeedMatchEntityDto[];
}

const VacancyMatchedCases: FC<VacancyMatchedCasesProps> = ({ casesData }) => {
    return (
        <VacancyInfoCard title="Matched cases">
            {casesData?.map((caseData, idx) => (
                <VacancyMatchedCase key={idx} caseData={caseData} />
            ))}
        </VacancyInfoCard>
    );
};

export default VacancyMatchedCases;
