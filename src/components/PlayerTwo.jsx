import React from 'react'
import PlayerTwoRpsBtns from './PlayerTwoRpsBtns'
import PlayerTwoGoBtn from './PlayerTwoGoBtn'
import { Header, Grid } from 'semantic-ui-react'

const PlayerTwo = ({ playerOneGoBtn, playerTwoPick, onClickPlayerTwoItem, onClickPlayerTwoGoBtn, playerTwoGoBtn, playerTwoPicked }) => {
    return (
        <>
            <Header id="player2-header" as="h2" textAlign="center">Player2</Header>
            <div id="player2-board">
                { playerOneGoBtn && (
                    <Grid columns={3} relaxed textAlign="center">
                        <Grid.Row>
                            <PlayerTwoRpsBtns playerTwoPick={playerTwoPick} onClickHandler={onClickPlayerTwoItem} playerTwoGoBtn={playerTwoGoBtn} />
                        </Grid.Row>
                        <Grid.Row>
                            <PlayerTwoGoBtn onClickHandler={onClickPlayerTwoGoBtn} playerTwoGoBtn={playerTwoGoBtn} />
                        </Grid.Row>
                    </Grid>
                )}
            </div>
        </>
    )
}

export default PlayerTwo