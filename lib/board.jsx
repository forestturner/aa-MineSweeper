import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
  }


  renderRows() {
    return this.props.board.grid.map((row, idxRow) => {
      return (
        <div className='row'>
          {this.renderTiles(row, idxRow)}
        </div>
      );
    });
  }

  renderTiles(row, i) {
    return row.map((tile, idxCol) => {
      return (
        <Tile tile={tile} updateGame={this.props.updateGame} key={i * this.props.board.gridSize + idxCol} />
      );
    });
  }

  render() {
    let rows = this.renderRows();
    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default Board;
