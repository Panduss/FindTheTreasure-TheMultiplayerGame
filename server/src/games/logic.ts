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

export const calculateWinner = (boat, lastshot) => {
  if(lastshot == boat) return true
}