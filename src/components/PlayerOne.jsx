import React from 'react'
import RpsBtns from './RpsBtns'
import GoBtn from './GoBtn'
import { Header, Grid } from 'semantic-ui-react'

const PlayerOne = props => {
    return (
        <div>
            <Header id="player-header" as="h2" textAlign="center">Player</Header>
            <Grid columns={3} relaxed textAlign="center">
                <Grid.Row>
                    <RpsBtns activeItem={props.activeItem} handleClick={props.handleClick} goBtn={props.goBtn} />
                </Grid.Row>
                <Grid.Row>
                    <GoBtn onClickHandlerGoBtn={props.onClickHandlerGoBtn} goBtn={props.goBtn}/>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default PlayerOne