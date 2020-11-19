import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PlayerOne from './components/PlayerOne'
import Computer from './components/Computer'
import ResultMessage from './components/ResultMessage'

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
        <Footer />
      </>
    )
  }
}

export default App