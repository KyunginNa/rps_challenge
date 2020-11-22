import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import Header from './components/Header'
import Footer from './components/Footer'
import PlayerOne from './components/PlayerOne'
import PlayerTwo from './components/PlayerTwo'
import ResultMessage from './components/ResultMessage'
// import PlayAgainBtn from './components/PlayAgainBtn'

class App extends Component {
  state = {
    playerOnePick: "",
    playerOneGoBtn: false,
    playerOnePicked: false,
    playerTwoPick: "",
    playerTwoGoBtn: false,
    playerTwoPicked: false
  }

  onClickPlayerOneItem = (e, { name }) => this.setState({ playerOnePick: name })

  onClickPlayerOneGoBtn = (e) => {
    this.setState({ playerOneGoBtn: true, playerOnePicked: true })
  }

  onClickPlayerTwoItem = (e, { name }) => this.setState({ playerTwoPick: name })

  onClickPlayerTwoGoBtn = (e) => {
    this.setState({ playerTwoGoBtn: true, playerTwoPicked: true, playerOnePicked: false })
  }

  onClickHandlerPlayAgainBtn = (e) => {
    this.setState({ playerOnePick: "", playerOneGoBtn: false })
  }

  render() {
    return (
      <>
        <Header />
        <Grid id="game-board">
          <Grid.Row>
            <Grid.Column width={8}>
              <PlayerOne
                playerOnePick={this.state.playerOnePick}
                onClickPlayerOneItem={this.onClickPlayerOneItem}
                onClickPlayerOneGoBtn={this.onClickPlayerOneGoBtn}
                playerOneGoBtn={this.state.playerOneGoBtn}
                playerOnePicked={this.state.playerOnePicked}
              />
            </Grid.Column>
            <Grid.Column width={8} textAlign="center">
              <PlayerTwo
                playerOneGoBtn={this.state.playerOneGoBtn}
                playerTwoPick={this.state.playerTwoPick}
                onClickPlayerTwoItem={this.onClickPlayerTwoItem}
                onClickPlayerTwoGoBtn={this.onClickPlayerTwoGoBtn}
                playerTwoGoBtn={this.state.playerTwoGoBtn}
                playerTwoPicked={this.state.playerTwoPicked}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <ResultMessage
              playerOnePick={this.state.playerOnePick}
              playerTwoPick={this.state.playerTwoPick}
              playerTwoGoBtn={this.state.playerTwoGoBtn}
            />
          </Grid.Row>
          <Grid.Row centered>
            {/* <PlayAgainBtn
              playerOnePick={this.state.playerOnePick}
              randomItem={this.state.randomItem}
              onClickHandlerPlayAgainBtn={this.onClickHandlerPlayAgainBtn}
            /> */}
          </Grid.Row>
        </Grid>
        <Footer />
      </>
    )
  }
}

export default App