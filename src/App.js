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
});

class App extends Component {
  state = {
    grid: cloneDeep(GRID)
  }

  render() {
    const { grid } = this.state;

    return (
      <div className={appStyle}>
        <h1>Tic-Tac-Toe</h1>
        <Board
          grid={grid} 
        />
      </div>
    );
  }
}

export default App;
