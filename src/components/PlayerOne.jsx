import React from 'react'
import PlayerOneRpsBtns from './PlayerOneRpsBtns'
import PlayerOneGoBtn from './PlayerOneGoBtn'
import { Header, Grid } from 'semantic-ui-react'

const PlayerOne = ({ playerOnePick, handleClick, playerOneGoBtn, onClickHandlerGoBtn, playerOnePicked }) => {
    return (
        <>
            <Header id="player-header" as="h2" textAlign="center">Player1</Header>
            <div id="player1-board">
                {!playerOnePicked && (
                    <Grid columns={3} relaxed textAlign="center">
                        <Grid.Row>
                            <PlayerOneRpsBtns playerOnePick={playerOnePick} handleClick={handleClick} playerOneGoBtn={playerOneGoBtn} />
                        </Grid.Row>
                        <Grid.Row>
                            <PlayerOneGoBtn onClickHandlerGoBtn={onClickHandlerGoBtn} playerOneGoBtn={playerOneGoBtn} />
                        </Grid.Row>
                    </Grid>
                )}
            </div>
        </>
    )
}

export default PlayerOne