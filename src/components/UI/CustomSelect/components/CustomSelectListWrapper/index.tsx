import { Box, Checkbox, Divider, FormControlLabel } from '@mui/material';
import { FC } from 'react';
import CustomSelectList from '../CustomSelectList';
import { MenuListProps } from 'react-select';
import UncheckedIcon from '../../../../icons/UncheckedIcon';

interface CustomSelectListWrapperProps extends MenuListProps {
    allOptionsSelected: boolean;
    handleToggleAllOptionsSelected:
        | ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void)
        | undefined;
}

const CustomSelectListWrapper: FC<CustomSelectListWrapperProps> = ({
    allOptionsSelected,
    handleToggleAllOptionsSelected,
    ...customSelectListProps
}) => {
    return (
        <Box sx={{ px: 1.25, py: 1 }}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={allOptionsSelected}
                        onChange={handleToggleAllOptionsSelected}
                        icon={<UncheckedIcon />}
                    />
                }
                label="ALL"
            />
            <Divider />
            <CustomSelectList {...customSelectListProps} />
        </Box>
    );
};

export default CustomSelectListWrapper;
