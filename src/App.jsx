import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import Header from './components/Header'
import Footer from './components/Footer'
import PlayerOne from './components/PlayerOne'
import PlayerTwo from './components/PlayerTwo'
import PlayAgainBtn from './components/PlayAgainBtn'
import RestartBtn from './components/RestartBtn'
import { returnResultOfRPS } from './helpers/rpsHelper'

class App extends Component {
  state = {
    playerOnePick: "",
    playerOneGoBtn: false,
    playerOneVisible: true,
    playerTwoPick: "",
    playerTwoGoBtn: false,
    resultMessage: "",
    playerOneScore: 0,
    playerTwoScore: 0
  }

  onClickPlayerOneItem = (e, { name }) => this.setState({ playerOnePick: name })

  onClickPlayerOneGoBtn = (e) => {
    this.setState({ playerOneGoBtn: true, playerOneVisible: false })
  }

  onClickPlayerTwoItem = (e, { name }) => this.setState({ playerTwoPick: name })

  onClickPlayerTwoGoBtn = (e) => {
    this.setState({ playerTwoGoBtn: true, playerOneVisible: true })
    const [message, score] = returnResultOfRPS(this.state.playerOnePick, this.state.playerTwoPick)
    this.setState({ resultMessage: message })
    if (score === 1) {
      this.setState({ playerOneScore: (this.state.playerOneScore + 1) })
    } else if (score === 2) {
      this.setState({ playerTwoScore: (this.state.playerTwoScore + 1) })
    }
  }

  onClickPlayAgainBtn = e => {
    this.setState({
      playerOnePick: "",
      playerOneGoBtn: false,
      playerOneVisible: true,
      playerTwoPick: "",
      playerTwoGoBtn: false,
      resultMessage: ""
    })
  }

  onClickRestartBtn = e => {
    this.setState({
      playerOnePick: "",
      playerOneGoBtn: false,
      playerOneVisible: true,
      playerTwoPick: "",
      playerTwoGoBtn: false,
      resultMessage: "",
      playerOneScore: 0,
      playerTwoScore: 0
    })
  }

  render() {
    let resultMessage;
    this.state.playerOnePick &&
      this.state.playerTwoPick &&
      this.state.playerTwoGoBtn ? resultMessage = this.state.resultMessage : resultMessage = ""

    return (
      <>
        <Header />
        <h1 id="current-score">{this.state.playerOneScore}:{this.state.playerTwoScore}</h1>
        <Grid id="game-board">
          <Grid.Row>
            <Grid.Column width={8}>
              <PlayerOne
                playerOnePick={this.state.playerOnePick}
                onClickPlayerOneItem={this.onClickPlayerOneItem}
                onClickPlayerOneGoBtn={this.onClickPlayerOneGoBtn}
                playerOneGoBtn={this.state.playerOneGoBtn}
                playerOneVisible={this.state.playerOneVisible}
              />
            </Grid.Column>
            <Grid.Column width={8} textAlign="center">
              <PlayerTwo
                playerOneGoBtn={this.state.playerOneGoBtn}
                playerTwoPick={this.state.playerTwoPick}
                onClickPlayerTwoItem={this.onClickPlayerTwoItem}
                onClickPlayerTwoGoBtn={this.onClickPlayerTwoGoBtn}
                playerTwoGoBtn={this.state.playerTwoGoBtn}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <h1 id="result-message">{resultMessage}</h1>
          </Grid.Row>
          <Grid.Row centered>
            <PlayAgainBtn
              playerTwoGoBtn={this.state.playerTwoGoBtn}
              onClickPlayAgainBtn={this.onClickPlayAgainBtn}
            />
            <RestartBtn
              playerTwoGoBtn={this.state.playerTwoGoBtn}
              onClickRestartBtn={this.onClickRestartBtn}
            />
          </Grid.Row>
        </Grid>
        <Footer />
      </>
    )
  }
}

export default App