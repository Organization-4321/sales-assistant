import { FC } from 'react';
import { FixedSizeList as List } from 'react-window';
import { MenuListProps } from 'react-select';

const OPTION_HEIGHT = 48;
const ROWS = 6;

const CustomSelectList: FC<MenuListProps> = ({ children }) => {
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
            }}>
            {({ style, index }) => <div style={style}>{children[index]}</div>}
        </List>
    ) : (
        <div>{children}</div>
    );
};

export default CustomSelectList;