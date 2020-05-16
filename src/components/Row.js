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
  isBottomRow
}) => (
  <div
    className={rowStyle}
  >
    {columns.map((fields, index) => (
      <Field
        key={index}
        isTopRow={isTopRow}
        isBottomRow={isBottomRow}
        isLeftColumn={index === 0}
        isRightColumn={index === columns.length - 1}
      />
    ))}
  </div>
);

export default Row;
