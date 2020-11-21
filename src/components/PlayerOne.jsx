import React from 'react'
import RpsBtns from './RpsBtns'
import GoBtn from './GoBtn'
import { Header, Grid } from 'semantic-ui-react'

const PlayerOne = ({ activeItem, handleClick, goBtn, onClickHandlerGoBtn }) => {
    return (
        <div>
            <Header id="player-header" as="h2" textAlign="center">Player</Header>
            <Grid columns={3} relaxed textAlign="center">
                <Grid.Row>
                    <RpsBtns activeItem={activeItem} handleClick={handleClick} goBtn={goBtn} />
                </Grid.Row>
                <Grid.Row>
                    <GoBtn onClickHandlerGoBtn={onClickHandlerGoBtn} goBtn={goBtn} />
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default PlayerOne