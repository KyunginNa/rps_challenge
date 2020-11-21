import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import Header from './components/Header'
import Footer from './components/Footer'
import PlayerOne from './components/PlayerOne'
// import PlayerTwo from './components/PlayerTwo'
import ResultMessage from './components/ResultMessage'
// import PlayAgainBtn from './components/PlayAgainBtn'

class App extends Component {
  state = {
    playerOnePick: "",
    playerOneGoBtn: false,
    playerOnePicked: false
  }

  handleClick = (e, { name }) => this.setState({ playerOnePick: name })
  onClickHandlerplayerOneGoBtn = (e) => {
    const rpsArray = ["rock", "paper", "scissors"]
    const randomItem = rpsArray[Math.floor(Math.random() * rpsArray.length)]
    this.setState({ playerOneGoBtn: true, randomItem: randomItem, playerOnePicked: true })
  }
  onClickHandlerPlayAgainBtn = (e) => {
    this.setState({ playerOnePick: "", playerOneGoBtn: false, randomItem: "" })
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
                handleClick={this.handleClick}
                onClickHandlerplayerOneGoBtn={this.onClickHandlerplayerOneGoBtn}
                playerOneGoBtn={this.state.playerOneGoBtn}
                playerOnePicked={this.state.playerOnePicked}
              />
            </Grid.Column>
            <Grid.Column width={8} textAlign="center">
              {/* <PlayerTwo
              /> */}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <ResultMessage
              playerOnePick={this.state.playerOnePick}
              randomItem={this.state.randomItem}
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