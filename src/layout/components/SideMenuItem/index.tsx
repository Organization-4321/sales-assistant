import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppTheme } from '../../../theme';
import { ITheme } from '../../../theme/types';

interface SideMenuItemProps {
    to?: string;
    label: string;
    beforeIcon?: JSX.Element;
    afterIcon?: JSX.Element;
    onClick?: () => void;
    onAfterIconClick?: () => void;
    afterIconHighlighted?: boolean;
}

const SideMenuItem: FC<SideMenuItemProps> = ({
    to,
    label,
    beforeIcon,
    afterIcon,
    onClick,
    afterIconHighlighted,
}) => {
    const theme = useTheme();
    const { themeName } = useAppTheme();
    const buttonComponent = to ? Link : 'div';
    const location = useLocation();

    return (
        <ListItem disablePadding onClick={onClick}>
            <ListItemButton
                component={buttonComponent}
                to={to}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 1,
                    py: 0.75,
                    borderRadius: 2,
                    color: theme.palette.text.secondary,
                    bgcolor:
                        location.pathname === to
                            ? theme.palette.text.primaryReversed
                            : theme.palette.background.paper,
                    '&:hover': {
                        bgcolor: themeName === ITheme.LIGHT ? '#f0f5ff' : '#181b29',
                    },
                }}>
                {beforeIcon && <ListItemIcon sx={{ minWidth: 'unset' }}>{beforeIcon}</ListItemIcon>}
                <ListItemText
                    sx={{
                        '& span': {
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                        },
                    }}
                    primary={label}
                />
                {afterIcon && (
                    <ListItemIcon
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        sx={{
                            minWidth: 'unset',
                            padding: 0.75,
                            borderRadius: 2,
                            bgcolor: afterIconHighlighted
                                ? theme.palette.text.primaryReversed
                                : 'unset',
                        }}>
                        <Box display="flex" alignItems="center">
                            {afterIcon}
                        </Box>
                    </ListItemIcon>
                )}
            </ListItemButton>
        </ListItem>
    );
};

export default SideMenuItem;
