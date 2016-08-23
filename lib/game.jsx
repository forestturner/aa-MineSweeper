import React from 'react';
import Board from './board';
import * as MineSweeper from '../minesweeper';


class Game extends React.Component {
  constructor(props) {
    super(props);
    const startBoard = new MineSweeper.Board(9, 6);
    this.state = {board: startBoard};
    this.updateGame = this.updateGame.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }

  updateGame(tile, flag) {
    if (flag) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board});
  }

  gameOver() {
    let str = "";
    if (this.state.board.won()){
      str = "YOU WON!";
    } else if (this.state.board.lost()) {
      str = "YOU LOST!";
    }
    return (
      <h1>
        {str}
      </h1>
    );
  }

  render() {
    let result = this.gameOver();
      return (
        <div>
          <Board board={this.state.board} updateGame={this.updateGame} />
          {result}
        </div>
      );
  }



}

export default Game;
