import React from 'react';
import Board from './board';
import * as MineSweeper from '../minesweeper';


class Game extends React.Component {
  constructor(props) {
    super(props);
    const startBoard = new MineSweeper.Board(9, 6);
    this.state = {board: startBoard};
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flag) {
    if (flag) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board});
  }

  render() {
      return (
        <div>
          <Board board={this.state.board} updateGame={this.updateGame} />
        </div>
      );
  }



}

export default Game;
