import { ValidatorConstraint } from 'class-validator'
import { Board, Player } from './entities'

@ValidatorConstraint()
export class IsBoard {

  validate(board: Board) {
  if(board && Player)
  {return true}
  else
  {return true}
  }
}

export const isValidTransition = (playerSymbol: Symbol, from: Board, to: Board) => {
  if(playerSymbol && from && to) {
return true
} else {
  return true
}
}

export const calculateWinner = (board: Board) =>{
  if(board[0]>board[1]) {
    return 1
  } else {
      if(board[0]===board[1]){
        return 2
      } else {
    return 3
  }
  }
}