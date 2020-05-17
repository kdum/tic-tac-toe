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
  textAlign: 'center'
});

const titleStyle = css({
  marginBottom: '50px'
});

const defaultState = {
  grid: cloneDeep(GRID),
  currentValue: 'X',
  emptyFields: ROWS_SIZE * COLUMNS_SIZE,
  isGameOver: false,
  winner: ''
};

class App extends Component {
  state = defaultState;

  checkGameStatus = ({ grid }) => {
    if(grid[0][0] === grid[0][1] && grid[0][0] === grid[0][2] && grid[0][0] !== ''){
      return true;
    } // horizontally: top row
    else if(grid[1][0] === grid[1][1] && grid[1][0] === grid[1][2] && grid[1][0] !== ''){
      return true;
    } // horizontally: middle row
    else if(grid[2][0] === grid[2][1] && grid[2][0] === grid[2][2] && grid[2][0] !== ''){
      return true;
    } // horizontaly: bottom row

    else if(grid[0][0] === grid[1][0] && grid[0][0] === grid[2][0] && grid[0][0] !== ''){
      return true;
    } // vertically: left column
    else if(grid[0][1] === grid[1][1] && grid[0][1] === grid[2][1] && grid[0][1] !== ''){
      return true;
    } // vertically: middle column
    else if(grid[0][2] === grid[1][2] && grid[0][2] === grid[2][2] && grid[0][2] !== ''){
      return true;
    } // vertically: right column

    else if(grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] !== ''){
      return true;
    } // diagonally: top-left to bottom-right
    else if(grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0] && grid[0][2] !== ''){
      return true;
    } // diagonally: top-right to bottom-left

    return false;
  }

  gameStatusInfo = () => {
    const { isGameOver, winner, emptyFields } = this.state;
    if(isGameOver && winner !== ''){
      return (
        <div>
          <h4>{winner} IS A WINNER</h4>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => this.restartGame()}>RESTART</button>
        </div>
      );
    }
    else if(emptyFields === 0){
      return (
        <div>
          <h4>IT'S A DRAW</h4>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => this.restartGame()}>RESTART</button>
        </div>
      );
    }
  }

  restartGame = () => {
    this.setState(defaultState);
  }

  handleClick = ({row, column}) => {
    const { grid, currentValue, emptyFields } = this.state;

    const clonedGrid = cloneDeep(grid); 
    const newEmptyFieldsCounts = emptyFields - 1;
    clonedGrid[row][column] = currentValue;

    const gameHasWinner = this.checkGameStatus({grid: clonedGrid});
    let gameOver = false;
    let winner = ''

    if(gameHasWinner){
      gameOver = true;
      winner = currentValue;
    }
    else if(newEmptyFieldsCounts === 0){
      gameOver = true;
    }

    const nextValue = currentValue === 'X' ? 'O' : 'X';

    this.setState({
      currentValue: nextValue,
      grid: clonedGrid,
      emptyFields: newEmptyFieldsCounts,
      isGameOver: gameOver,
      winner: winner
    });
  }

  render() {
    const { grid, isGameOver } = this.state;

    return (
      <div className={appStyle}>
        <h1 className={titleStyle}>Tic-Tac-Toe</h1>
        <Board
          grid={grid}
          onClick={isGameOver ? null : this.handleClick}
        />
        {this.gameStatusInfo()}
      </div>
    );
  }
}

export default App;
