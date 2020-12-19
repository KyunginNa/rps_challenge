import React from "react"
import { Grid } from "semantic-ui-react"
import { useSelector } from "react-redux"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PlayerOne from "./components/PlayerOne"
import PlayerTwo from "./components/PlayerTwo"
import PlayAgainBtn from "./components/PlayAgainBtn"
import RestartBtn from "./components/RestartBtn"
import Score from "./components/Score"

const App = () => {
  let resultMessage = useSelector(state => state.resultMessage)
  return (
    <>
      <Header />
      <div className="div-main">
        <Score />
        <Grid classNam="game-board">
          <Grid.Row>
            <Grid.Column width={8}>
              <PlayerOne />
            </Grid.Column>
            <Grid.Column width={8} textAlign="center">
              <PlayerTwo />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <h1
              data-cy="result-message"
              className="result-message"
            >{resultMessage}
            </h1>
          </Grid.Row>
          <Grid.Row centered>
            <PlayAgainBtn />
            <RestartBtn />
          </Grid.Row>
        </Grid>
      </div>
      <Footer />
    </>
  )
}

export default App