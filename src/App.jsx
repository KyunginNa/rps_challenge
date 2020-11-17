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
        />
        <ResultMessage />
        <Footer />
      </>
    )
  }
}

export default App