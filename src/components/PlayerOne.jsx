import React, { Component } from 'react'
import RpsButton from './RpsButtons'
import GoButton from './GoButton'
import { Header, Grid } from 'semantic-ui-react'

export class PlayerOne extends Component {
    render() {
        return (
            <div>
                <Header id="player-header" as="h2" textAlign="center">Player</Header>
                <Grid columns={3} relaxed textAlign="center">
                    <Grid.Row>
                        <RpsButton />
                    </Grid.Row>
                    <Grid.Row>
                        <GoButton />
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default PlayerOne
