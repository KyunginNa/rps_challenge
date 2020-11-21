import React from 'react'
import RpsBtns from './RpsBtns'
import GoBtn from './GoBtn'
import { Header, Grid } from 'semantic-ui-react'

const PlayerOne = ({ activeItem, handleClick, goBtn, onClickHandlerGoBtn, playerOnePicked }) => {
    return (
        <>
            <Header id="player-header" as="h2" textAlign="center">Player1</Header>
            <div id="player1-board">
                {!playerOnePicked && (
                    <Grid columns={3} relaxed textAlign="center">
                        <Grid.Row>
                            <RpsBtns activeItem={activeItem} handleClick={handleClick} goBtn={goBtn} />
                        </Grid.Row>
                        <Grid.Row>
                            <GoBtn onClickHandlerGoBtn={onClickHandlerGoBtn} goBtn={goBtn} />
                        </Grid.Row>
                    </Grid>
                )}
            </div>
        </>
    )
}

export default PlayerOne