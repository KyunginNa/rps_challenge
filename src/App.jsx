import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import Header from './components/Header'
import Footer from './components/Footer'
import PlayerOne from './components/PlayerOne'
import PlayerTwo from './components/PlayerTwo'
import ResultMessage from './components/ResultMessage'
import PlayAgainBtn from './components/PlayAgainBtn'

class App extends Component {
  state = {
    activeItem: "",
    goBtn: false,
    randomItem: "",
    playerOnePicked: false,
  }

  handleClick = (e, { name }) => this.setState({ activeItem: name })
  onClickHandlerGoBtn = (e) => {
    const rpsArray = ["rock", "paper", "scissors"]
    const randomItem = rpsArray[Math.floor(Math.random() * rpsArray.length)]
    this.setState({ goBtn: true, randomItem: randomItem, playerOnePicked: true })
  }
  onClickHandlerPlayAgainBtn = (e) => {
    this.setState({ activeItem: "", goBtn: false, randomItem: "" })
  }

  render() {
    return (
      <>
        <Header />
        <Grid id="game-board">
          <Grid.Row>
            <Grid.Column width={8}>
              <PlayerOne
                activeItem={this.state.activeItem}
                handleClick={this.handleClick}
                onClickHandlerGoBtn={this.onClickHandlerGoBtn}
                goBtn={this.state.goBtn}
                playerOnePicked={this.state.playerOnePicked}
              />
            </Grid.Column>
            <Grid.Column width={8} textAlign="center">
              <PlayerTwo
                activeItem={this.state.activeItem}
                handleClick={this.handleClick}
                onClickHandlerGoBtn={this.onClickHandlerGoBtn}
                goBtn={this.state.goBtn}
                playerOnePicked={this.state.playerOnePicked}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <ResultMessage
              activeItem={this.state.activeItem}
              randomItem={this.state.randomItem}
            />
          </Grid.Row>
          <Grid.Row centered>
            <PlayAgainBtn
              activeItem={this.state.activeItem}
              randomItem={this.state.randomItem}
              onClickHandlerPlayAgainBtn={this.onClickHandlerPlayAgainBtn}
            />
          </Grid.Row>
        </Grid>
        <Footer />
      </>
    )
  }
}

export default App