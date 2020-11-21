import React from 'react'
import RpsBtns from './RpsBtns'
import PlayerOneGoBtn from './PlayerOneGoBtn'
import { Header, Grid } from 'semantic-ui-react'

const PlayerTwo = ({ activeItem, handleClick, PlayerOneGoBtn, onClickHandlerGoBtn, playerOnePicked }) => {
    return (
        <>
            <Header id="player-header" as="h2" textAlign="center">Player2</Header>
            <div id="player2-board">
                {/* {playerOnePicked && (
                    <Grid columns={3} relaxed textAlign="center">
                        <Grid.Row>
                            <RpsBtns activeItem={activeItem} handleClick={handleClick} PlayerOneGoBtn={PlayerOneGoBtn} />
                        </Grid.Row>
                        <Grid.Row>
                            <PlayerOneGoBtn onClickHandlerGoBtn={onClickHandlerGoBtn} PlayerOneGoBtn={PlayerOneGoBtn} />
                        </Grid.Row>
                    </Grid>
                )} */}
            </div>
        </>
    )
}

export default PlayerTwo