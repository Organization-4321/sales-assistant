import { FC } from 'react';
import { Link as RouterLinkComponent, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link as MuiLink, LinkProps as MuiLinkProps, SxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material';

const StyledRouterLink = styled(MuiLink)<MuiLinkProps & { sx?: SxProps<Theme> }>(
    ({ theme, sx }) => ({
        color: theme.palette.mode === 'dark' ? '#5b94fe' : theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
        ...(sx as any),
    }),
);

type CombinedLinkProps = MuiLinkProps & RouterLinkProps & { sx?: SxProps<Theme> };

const RouterLink: FC<CombinedLinkProps> = ({ children, sx, ...props }) => {
    return (
        <StyledRouterLink component={RouterLinkComponent} {...props} sx={sx}>
            {children}
        </StyledRouterLink>
    );
};

export default RouterLink;
