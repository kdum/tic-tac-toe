import React from 'react';
import { css } from 'emotion';

const DEFAULT_BORDER_STYLE = '1px solid black';
const DEFAULT_FIELD_SIZE = '100px';

const Field = ({
  isTopRow,
  isBottomRow,
  isLeftColumn,
  isRightColumn
}) => {
  const fieldStyle = css({
    borderTop: isTopRow ? 'none' : DEFAULT_BORDER_STYLE ,
    borderBottom: isBottomRow ? 'none' : DEFAULT_BORDER_STYLE,
    borderLeft: isLeftColumn ? 'none' : DEFAULT_BORDER_STYLE,
    borderRight: isRightColumn ? 'none' : DEFAULT_BORDER_STYLE,
    width: DEFAULT_FIELD_SIZE,
    height: DEFAULT_FIELD_SIZE
  });

  return (
    <div>
      <div
        className={fieldStyle}
      >
      </div>
    </div>
  );
};

export default Field;
