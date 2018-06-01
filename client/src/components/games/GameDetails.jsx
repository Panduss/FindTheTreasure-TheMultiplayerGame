import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getGames, joinGame, updateGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {userId} from '../../jwt'
import Paper from 'material-ui/Paper'
import Board from './Board'
import './GameDetails.css'


class GameDetails extends PureComponent {
 
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  joinGame = () => this.props.joinGame(this.props.game.id)

  makeMove = (shot) => {
    const {users, game, updateGame, userId} = this.props
    const lastShot = game.lastShot
    const boat = game.boat

    if (userId !== game.lastMove) {
        if(shot == boat) {
          document.getElementsByClassName("board-tile")[shot-1].style.backgroundColor = '#daa520'
        } else {
          document.getElementsByClassName("board-tile")[shot-1].style.backgroundColor = 'transparent'
        }
    }
    updateGame(game.id, shot)
  }

  render() {
    const {game, users, authenticated, userId} = this.props

    if (!authenticated) return (
            <Redirect to="/login" />
        )

    if (game === null || users === null) return 'Loading...'
    if (!game) return 'Not found'

    const player = game.players.find(p => p.userId === userId)



    const winner = game.winner
    const lastMove = game.lastMove

    return (<Paper className="outer-paper">
    <div className="helloo">
      <h1 className='gameStatus'>Find the treasure - #{game.id}</h1>

      {
        game.status === 'started' && 
        userId !== game.lastMove &&
        <div className="gameTextDiv">Yarrrr! It's your turn!</div>
      }

      {
      game.status === 'started' && 
        userId === game.lastMove &&
        <div className="gameTextDiv">Wait for your turn!</div>
      }

      {
        game.status === 'pending' &&
        game.players.map(p => p.userId).indexOf(userId) === -1 &&
        <button className="joinButton" onClick={this.joinGame}>Join Game</button>
      }

      {
        winner &&
      <p className="gameText">Winner: {winner.split('@')[0]}</p>
      }
      {
      <p className="gameText">Status: {game.status}</p>
      }
      </div>
      <hr />

      {
        game.status !== 'pending' &&
        <Board board={game.board} makeMove={this.makeMove} />

      }
    </Paper>
    )
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  users: state.users,
  players: state.players
})

const mapDispatchToProps = {
  getGames, getUsers, joinGame, updateGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails)
