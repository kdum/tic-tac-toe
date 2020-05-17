import React from 'react';
import { css } from 'emotion';

const DEFAULT_BORDER_STYLE = '1px solid black';
const DEFAULT_FIELD_SIZE = 120;

const Field = ({
  isTopRow,
  isBottomRow,
  isLeftColumn,
  isRightColumn,
  rowIndex,
  columnIndex,
  onClick,
  value
}) => {
  const fieldStyle = css({
    alignItems: 'center',
    borderTop: isTopRow ? 'none' : DEFAULT_BORDER_STYLE ,
    borderBottom: isBottomRow ? 'none' : DEFAULT_BORDER_STYLE,
    borderLeft: isLeftColumn ? 'none' : DEFAULT_BORDER_STYLE,
    borderRight: isRightColumn ? 'none' : DEFAULT_BORDER_STYLE,
    width: DEFAULT_FIELD_SIZE,
    height: DEFAULT_FIELD_SIZE,
    fontSize: DEFAULT_FIELD_SIZE * 0.75,
    display: 'flex',
    justifyContent: 'center'
  });

  return (
    <div>
      <div
        className={fieldStyle}
        onClick={() => {
          if(!value && onClick){
            onClick({row: rowIndex, column: columnIndex})
          }
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default Field;
