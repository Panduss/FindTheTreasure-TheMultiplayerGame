import React from 'react'
import './Board.css'
import {connect} from 'react-redux'
import { color } from 'material-ui/colors';

export default (props) =>
<div>
  <div>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>1</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>2</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>3</button>
  </div>
  <div>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>4</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>5</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>6</button>
  </div>
  <div>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>7</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>8</button>
    <button className="board-tile" onClick={(event) => props.makeMove(event.target.innerHTML)}>9</button>
  </div>
</div>