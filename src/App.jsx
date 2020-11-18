import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PlayerOne from './components/PlayerOne'
import Computer from './components/Computer'
import ResultMessage from './components/ResultMessage'

class App extends Component {
  state = {
    activeItem: "",
    goBtn: ""
  }

  handleClick = (e, { name }) => this.setState({ activeItem: name })
  onClickHandlerGoBtn = e => this.setState({ goBtn: true })

  render() {
    const rpsArray = ["rock", "paper", "scissors"]
    const randomItem = rpsArray[Math.floor(Math.random() * rpsArray.length)]
    return (
      <>
        <Header />
        <PlayerOne
          activeItem={this.state.activeItem}
          handleClick={this.handleClick}
          onClickHandlerGoBtn={this.onClickHandlerGoBtn}
          active={this.goBtn}
        />
        <Computer
          activeItem={this.state.activeItem}
          goBtn={this.state.goBtn}
          randomItem={randomItem}
        />
        {/* Make RSP buttons and go button disabled till the user clicks start again */}
        <ResultMessage />
        <Footer />
      </>
    )
  }
}

export default App