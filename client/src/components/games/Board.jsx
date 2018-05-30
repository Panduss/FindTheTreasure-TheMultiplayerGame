import React from 'react'
import './Board.css'
const numbers= [1,2,3,4,5,6,7,8,9]
export const randomShip = numbers[Math.floor(Math.random() * numbers.length)]

console.log(randomShip)

export default (props) =>
    <div>
    <button
      className="board-tile"
      key={`1`}
      onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
    >1</button>

    <button
      className="board-tile"
      // disabled={hasTurn}
      key={`2`}
      onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
    >2</button>

    <button
      className="board-tile"
      // disabled={hasTurn}
      key={`3`}
      onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
    >3</button>

    <button
      className="board-tile"
      // disabled={hasTurn}
      key={`4`}
      onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
    >4</button>

    <button
      className="board-tile"
      // disabled={hasTurn}
      key={`5`}
      onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
    >5</button>

    <button
      className="board-tile"
      // disabled={hasTurn}
      key={`6`}
      onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
    >6</button>

    <button
      className="board-tile"
      // disabled={hasTurn}
      key={`7`}
      onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
    >7</button>

    <button
      className="board-tile"
      // disabled={hasTurn}
      key={`8`}
      onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
    >8</button>

    <button
      className="board-tile"
      // disabled={hasTurn}
      key={`9`}
      onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
    >9</button>

    </div>



// export default ({board, makeMove}) => board.map((cells, rowIndex) =>
//   <div key={rowIndex}>
//     {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex,symbol,false))}
//   </div>
// )