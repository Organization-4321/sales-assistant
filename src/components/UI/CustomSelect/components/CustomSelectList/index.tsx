import { FC } from 'react';
import { FixedSizeList as List } from 'react-window';
import { MenuListProps } from 'react-select';
import { IOptionInterface } from '../../../../../interfaces-submodule/interfaces/dto/common/ioption.interface';

const OPTION_HEIGHT = 48;
const ROWS = 6;

const CustomSelectList: FC<MenuListProps> = ({ getValue, options, children }) => {
    const selectedValues = getValue() as IOptionInterface[];

    const initialOffset =
        options.indexOf(selectedValues[selectedValues.length - 1]) <= ROWS - 1
            ? 0
            : selectedValues[selectedValues.length - 1]
            ? options.indexOf(selectedValues[selectedValues.length - 1]) * OPTION_HEIGHT
            : 0;

    return Array.isArray(children) ? (
        <List
            width="100%"
            height={
                children.length >= ROWS ? OPTION_HEIGHT * ROWS : children.length * OPTION_HEIGHT
            }
            itemCount={children.length}
            itemSize={OPTION_HEIGHT}
            style={{
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
            }}
            initialScrollOffset={initialOffset}>
            {({ style, index }) => (
                <div style={{ ...style, display: 'flex', alignItems: 'center' }}>
                    {children[index]}
                </div>
            )}
        </List>
    ) : (
        <div>{children}</div>
    );
};

export default CustomSelectList;
