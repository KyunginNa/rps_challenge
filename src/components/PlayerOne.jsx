import React, { Component } from 'react'
import { Header, Grid, Button, Icon } from 'semantic-ui-react'

export class PlayerOne extends Component {
    render() {
        return (
            <div>
                <Header id="player-header" as="h2" textAlign="center">Player</Header>
                <Grid columns={3} relaxed textAlign="center">
                    <Grid.Row>
                        <Grid.Column>
                            <Button icon inverted>
                                <Icon name="hand rock outline" size="massive" color="black" />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button icon inverted>
                                <Icon name="hand paper outline" size="massive" color="black" />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button icon inverted>
                                <Icon name="hand scissors outline" size="massive" color="black" />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Button animated inverted color='red' size="big">
                            <Button.Content visible>Go!</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default PlayerOne
