import React from 'react'
import PlayerOneRpsBtns from './PlayerOneRpsBtns'
import PlayerOneGoBtn from './PlayerOneGoBtn'
import { Header, Grid } from 'semantic-ui-react'

const PlayerOne = ({ playerOnePick, onClickPlayerOneItem, onClickPlayerOneGoBtn, playerOneGoBtn, playerOnePicked }) => {
    return (
        <>
            <Header id="player-header" as="h2" textAlign="center">Player1</Header>
            <div id="player1-board">
                {!playerOnePicked && (
                    <Grid columns={3} relaxed textAlign="center">
                        <Grid.Row>
                            <PlayerOneRpsBtns playerOnePick={playerOnePick} onClickHandler={onClickPlayerOneItem} playerOneGoBtn={playerOneGoBtn} />
                        </Grid.Row>
                        <Grid.Row>
                            <PlayerOneGoBtn playerOnePick={playerOnePick} onClickHandler={onClickPlayerOneGoBtn} playerOneGoBtn={playerOneGoBtn} />
                        </Grid.Row>
                    </Grid>
                )}
            </div>
        </>
    )
}

export default PlayerOne