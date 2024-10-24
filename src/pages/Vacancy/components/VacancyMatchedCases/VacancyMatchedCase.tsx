import { FC } from 'react';
import { IUpworkFeedMatchEntityDto } from '../../../../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-match-entity.dto';
import { Collapse, Typography } from '@mui/material';
import VacancyMatchedBlockItem from '../VacancyMatchedBlockItem';
import VacancyMatchedTable from '../VacancyMatchedTable';
import useExpandBlock from '../../hooks/useExpandBlock';

interface VacancyMatchedCaseProps {
    caseData: IUpworkFeedMatchEntityDto;
}

const VacancyMatchedCase: FC<VacancyMatchedCaseProps> = ({ caseData }) => {
    const { isExpanded, handleToggleExpanded } = useExpandBlock();

    const [contentBefore, contentAfter] = caseData.content.split('\\[…\\]');

    return (
        <VacancyMatchedBlockItem
            blockName="cases"
            matchData={caseData}
            leftSideContent={
                <>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ whiteSpace: 'break-spaces' }}>
                        {contentBefore}
                    </Typography>
                    {contentAfter ? (
                        <>
                            <Typography
                                color="customBlue.main"
                                sx={{
                                    textDecoration: 'underline',
                                    userSelect: 'none',
                                }}
                                onClick={handleToggleExpanded}>
                                {isExpanded ? 'Collapse' : 'Expand'}
                            </Typography>
                            <Collapse in={isExpanded}>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    sx={{ whiteSpace: 'break-spaces' }}>
                                    {contentAfter}
                                </Typography>
                                <VacancyMatchedTable infoBlock={caseData.infoBlock} />
                            </Collapse>
                        </>
                    ) : (
                        <VacancyMatchedTable infoBlock={caseData.infoBlock} />
                    )}
                </>
            }
        />
    );
};

export default VacancyMatchedCase;
