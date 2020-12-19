import React from "react"
import { useSelector } from "react-redux"
import PlayerTwoRpsBtns from "./PlayerTwoRpsBtns"
import PlayerTwoGoBtn from "./PlayerTwoGoBtn"
import PlayerTwoRandomBtn from "./PlayerTwoRandomBtn"
import { Header, Grid } from "semantic-ui-react"

const PlayerTwo = () => {
  const playerOneGoBtn = useSelector(state => state.playerOneGoBtn)
  return (
    <>
      <Header
        data-cy="player2-header"
        textAlign="center"
        style={{
          fontFamily: "monospace",
          fontSize: 35,
          color: "aliceblue"
        }}>
        Player 2
      </Header>
      <div data-cy="player2-board">
        {playerOneGoBtn && (
          <Grid
            columns={3}
            relaxed
            textAlign="center">
            <Grid.Row id="player2-rps">
              <PlayerTwoRpsBtns />
            </Grid.Row>
            <Grid.Row>
              <PlayerTwoGoBtn />
            </Grid.Row>
            <Grid.Row>
              <PlayerTwoRandomBtn />
            </Grid.Row>
          </Grid>
        )}
      </div>
    </>
  )
}

export default PlayerTwo