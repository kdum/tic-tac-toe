import React, { Component } from 'react';
import { css } from 'emotion';
import Board from './components/Board';
import cloneDeep from 'lodash.clonedeep';

const ROWS_SIZE = 3;
const COLUMNS_SIZE = 3;
const ROW_ARR = new Array(ROWS_SIZE).fill('');
const COL_ARR = new Array(COLUMNS_SIZE).fill('');
const GRID = ROW_ARR.map(x => COL_ARR.slice());

const appStyle = css({
  textAlign: 'center',
  backgroundColor: '#000000'
});

const titleStyle = css({
  marginBottom: '50px'
});

class App extends Component {
  state = {
    grid: cloneDeep(GRID),
    currentValue: 'X'
  }

  handleClick = ({row, column}) => {
    const { grid, currentValue } = this.state;

    const clonedGrid = cloneDeep(grid); 
    const nextValue = currentValue === 'X' ? 'O' : 'X';
    clonedGrid[row][column] = currentValue;

    this.setState({
      currentValue: nextValue,
      grid: clonedGrid
    });
  }

  render() {
    const { grid } = this.state;

    return (
      <div className={appStyle}>
        <h1 className={titleStyle}>Tic-Tac-Toe</h1>
        <Board
          grid={grid}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
