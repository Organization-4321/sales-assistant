import { Typography } from '@mui/material';
import { FC } from 'react';

interface ExpandableTypographyProps {
    text: string;
    visibleTextLength: number;
    isExpanded: boolean;
    onExpandButtonClick: () => void;
}

const ExpandableTypography: FC<ExpandableTypographyProps> = ({
    text,
    visibleTextLength,
    isExpanded,
    onExpandButtonClick,
}) => {
    const words = text.split(' ');
    const contentBefore = words.slice(0, visibleTextLength).join(' ');
    const contentAfter =
        contentBefore.length < text.length ? words.slice(visibleTextLength).join(' ') : null;

    return (
        <>
            <Typography
                variant="body1"
                color="textSecondary"
                sx={{ whiteSpace: 'break-spaces', marginBottom: 1 }}>
                {contentBefore}
                {!isExpanded && contentAfter && '...'}
                {isExpanded && contentAfter && ` ${contentAfter}`}
            </Typography>
            {contentAfter && (
                <Typography
                    color="customBlue.main"
                    sx={{
                        textDecoration: 'underline',
                        userSelect: 'none',
                    }}
                    onClick={onExpandButtonClick}>
                    {isExpanded ? 'Collapse' : 'Expand'}
                </Typography>
            )}
        </>
    );
};

export default ExpandableTypography;
