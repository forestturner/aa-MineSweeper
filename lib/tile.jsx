import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    this.props.updateGame(this.props.tile, e.altKey);

  }

  render() {
    let tileStyle = null;
    let currTile  = this.props.tile;
    if (currTile.bombed && currTile.explored) {
      tileStyle = 'b'
    } else if (currTile.flagged) {
      tileStyle = 'f'
    } else if (currTile.explored) {
      tileStyle =  currTile.adjacentBombCount();
    } else {
      tileStyle = ' '
    }

    return (
      <div className='tile' onClick={this.handleClick}>{tileStyle}</div>
    );
  }
}

export default Tile;
