import React from 'react'
import PlayerTwoRpsBtns from './PlayerTwoRpsBtns'
import PlayerTwoGoBtn from './PlayerTwoGoBtn'
import PlayerTwoRandomBtn from './PlayerTwoRandomBtn'
import { Header, Grid } from 'semantic-ui-react'

const PlayerTwo = ({ playerOneGoBtn, playerTwoPick, onClickPlayerTwoItem, onClickPlayerTwoGoBtn, playerTwoGoBtn, onClickPlayerTwoRandomBtn }) => {
    return (
        <>
            <Header
                id="player2-header"
                textAlign="center"
                style={{
                    fontFamily: "monospace",
                    fontSize: 35,
                    color: "aliceblue"
                }}
            >Player 2
            </Header>
            <div id="player2-board">
                {playerOneGoBtn && (
                    <Grid columns={3} relaxed textAlign="center">
                        <Grid.Row id="player2-rps">
                            <PlayerTwoRpsBtns playerTwoPick={playerTwoPick} onClickHandler={onClickPlayerTwoItem} playerTwoGoBtn={playerTwoGoBtn} />
                        </Grid.Row>
                        <Grid.Row>
                            <PlayerTwoGoBtn playerTwoPick={playerTwoPick} onClickHandler={onClickPlayerTwoGoBtn} playerTwoGoBtn={playerTwoGoBtn} />
                        </Grid.Row>
                        <Grid.Row>
                            <PlayerTwoRandomBtn playerTwoGoBtn={playerTwoGoBtn} onClickHandler={onClickPlayerTwoRandomBtn} />
                        </Grid.Row>
                    </Grid>
                )}
            </div>
        </>
    )
}

export default PlayerTwo