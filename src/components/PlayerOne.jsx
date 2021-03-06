import React from "react"
import PlayerOneRpsBtns from "./PlayerOneRpsBtns"
import PlayerOneGoBtn from "./PlayerOneGoBtn"
import PlayerOneRandomBtn from "./PlayerOneRandomBtn"
import { useSelector } from "react-redux"
import { Header, Grid } from "semantic-ui-react"

const PlayerOne = () => {
  const playerOneVisible = useSelector(state => state.playerOneVisible)
  return (
    <>
      <Header
        data-cy="player-header"
        textAlign="center"
        style={{
          fontFamily: "monospace",
          fontSize: 35,
          color: "aliceblue"
        }}>
        Player 1
      </Header>
      <div data-cy="player1-board">
        {playerOneVisible && (
          <Grid
            columns={3}
            relaxed
            textAlign="center">
            <Grid.Row className="player-rps">
              <PlayerOneRpsBtns />
            </Grid.Row>
            <Grid.Row>
              <PlayerOneGoBtn />
            </Grid.Row>
            <Grid.Row>
              <PlayerOneRandomBtn />
            </Grid.Row>
          </Grid>
        )}
      </div>
    </>
  )
}

export default PlayerOne