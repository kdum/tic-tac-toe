import React from 'react';
import Row from '../components/Row';

const Board = ({
  grid
}) => {
  return (
    <div>
      {grid.map((rows, index) => (
        <Row
          key={index}
          columns={rows}
          isTopRow={index === 0}
          isBottomRow={index === grid.length - 1}
        />
      ))}
    </div>
  );
};

export default Board;
