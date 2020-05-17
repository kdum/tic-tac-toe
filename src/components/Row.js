import React from 'react';
import { css } from 'emotion';
import Field from './Field';

const rowStyle = css({
  display: 'flex',
  justifyContent: 'center'
})

const Row = ({
  columns,
  isTopRow,
  isBottomRow,
  rowIndex,
  onClick
}) => (
  <div
    className={rowStyle}
  >
    {columns.map((field, index) => (
      <Field
        key={index}
        isTopRow={isTopRow}
        isBottomRow={isBottomRow}
        isLeftColumn={index === 0}
        isRightColumn={index === columns.length - 1}
        rowIndex={rowIndex}
        columnIndex={index}
        onClick={onClick}
        value={field}
      />
    ))}
  </div>
);

export default Row;
