import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import PlayerOne from './components/PlayerOne'
import Computer from './components/Computer'
import ResultMessage from './components/ResultMessage'
import PlayAgainBtn from './components/PlayAgainBtn'

class App extends Component {
  state = {
    activeItem: "",
    goBtn: false,
    randomItem: ""
  }

  handleClick = (e, { name }) => this.setState({ activeItem: name })
  onClickHandlerGoBtn = (e) => {
    this.setState({ goBtn: true })
    const rpsArray = ["rock", "paper", "scissors"]
    const randomItem = rpsArray[Math.floor(Math.random() * rpsArray.length)]
    this.setState({ randomItem: randomItem })
  }
  onClickHandlerPlayAgainBtn = (e) => {
    this.setState({ activeItem: "", goBtn: false, randomItem: ""})
  }

  render() {
    return (
      <>
        <Header />
        <PlayerOne
          activeItem={this.state.activeItem}
          handleClick={this.handleClick}
          onClickHandlerGoBtn={this.onClickHandlerGoBtn}
          goBtn={this.state.goBtn}
        />
        <Computer
          activeItem={this.state.activeItem}
          goBtn={this.state.goBtn}
          randomItem={this.state.randomItem}
        />
        <ResultMessage
          activeItem={this.state.activeItem}
          randomItem={this.state.randomItem}
        />
        <PlayAgainBtn
          randomItem={this.state.randomItem}
          onClickHandlerPlayAgainBtn={this.onClickHandlerPlayAgainBtn}
        />
        <Footer />
      </>
    )
  }
}

export default App