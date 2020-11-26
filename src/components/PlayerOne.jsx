import React from 'react'
import PlayerOneRpsBtns from './PlayerOneRpsBtns'
import PlayerOneGoBtn from './PlayerOneGoBtn'
import PlayerOneRandomBtn from './PlayerOneRandomBtn'
import { Header, Grid } from 'semantic-ui-react'

const PlayerOne = ({ playerOnePick, onClickPlayerOneItem, onClickPlayerOneGoBtn, playerOneGoBtn, playerOneVisible, onClickPlayerOneRandomBtn }) => {
  return (
    <>
      <Header
        id="player-header"
        textAlign="center"
        style={{
          fontFamily: "monospace",
          fontSize: 35,
          color: "aliceblue"
        }}>
        Player 1
      </Header>
      <div id="player1-board">
        {playerOneVisible && (
          <Grid
            columns={3}
            relaxed
            textAlign="center">
            <Grid.Row id="player1-rps">
              <PlayerOneRpsBtns
                playerOnePick={playerOnePick}
                onClickHandler={onClickPlayerOneItem}
                playerOneGoBtn={playerOneGoBtn} />
            </Grid.Row>
            <Grid.Row>
              <PlayerOneGoBtn
                playerOnePick={playerOnePick}
                onClickHandler={onClickPlayerOneGoBtn}
                playerOneGoBtn={playerOneGoBtn} />
            </Grid.Row>
            <Grid.Row>
              <PlayerOneRandomBtn
                playerOneGoBtn={playerOneGoBtn}
                onClickHandler={onClickPlayerOneRandomBtn} />
            </Grid.Row>
          </Grid>
        )}
      </div>
    </>
  )
}

export default PlayerOne