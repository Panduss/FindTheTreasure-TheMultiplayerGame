import React from 'react'
import './Board.css'
import {connect} from 'react-redux'
import { color } from 'material-ui/colors';

export default (props) =>
<div className="board">
  <div>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>1</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>2</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>3</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>4</button>
  </div>
  <div>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>5</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>6</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>7</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>8</button>
  </div>
  <div>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>9</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>10</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>11</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>12</button>
  </div>
  <div>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>13</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>14</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>15</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>16</button>
  </div>
</div>