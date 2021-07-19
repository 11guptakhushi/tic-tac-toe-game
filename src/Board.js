import React from 'react';
import './App.css';
import Square from './Square';
class Board extends React.Component {
 
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
/*
        for(i=0; i<3; i++){
          p=0;
          for(j=p; j<q; j++){
            <div className="board-row">
              {this.renderSquare(j)}
              q=p+=3
            </div>
          }
        }
*/
  render() {
    return (
      <div>
        
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
  export default Board;