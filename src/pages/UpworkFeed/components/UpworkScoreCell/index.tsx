import { Chip } from '@mui/material';
import { FC } from 'react';
import { useAppTheme } from '../../../../theme';
import { ITheme } from '../../../../theme/types';

interface UpworkScoreCellProps {
    score: number;
}

const scoresRange = [
    {
        minValue: 0,
        maxValue: 19,
        lightColor: '#fac8d0',
        darkColor: '#7a2c39',
    },
    {
        minValue: 20,
        maxValue: 39,
        lightColor: '#fad2b4',
        darkColor: '#6b3920',
    },
    {
        minValue: 40,
        maxValue: 59,
        lightColor: '#f0e4a8',
        darkColor: '#705c0b',
    },
    {
        minValue: 60,
        maxValue: 99,
        lightColor: '#c9f0c9',
        darkColor: '#2d662d',
    },
    {
        minValue: 80,
        maxValue: 100,
        lightColor: '#c4e5f5',
        darkColor: '#295266',
    },
];

const UpworkScoreCell: FC<UpworkScoreCellProps> = ({ score }) => {
    const { themeName } = useAppTheme();

    const scoreRange = scoresRange.find(
        (scoreRange) => score >= scoreRange.minValue && score <= scoreRange.maxValue,
    );

    const scoreColor = themeName === ITheme.DARK ? scoreRange?.darkColor : scoreRange?.lightColor;

    return <Chip sx={{ backgroundColor: scoreColor }} label={score} />;
};

export default UpworkScoreCell;
