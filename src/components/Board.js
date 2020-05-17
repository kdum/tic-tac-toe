import React from 'react';
import Row from '../components/Row';

const Board = ({
  grid,
  onClick
}) => {
  return (
    <div>
      {grid.map((rows, index) => (
        <Row
          key={index}
          columns={rows}
          isTopRow={index === 0}
          isBottomRow={index === grid.length - 1}
          rowIndex={index}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default Board;
