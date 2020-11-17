import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

class ButtonExampleToggle extends Component {
    state = {
        activeItem: ""
    }

    handleClick = (e, { name }) =>
        this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <>
                <Grid.Column>
                    <Button
                        toggle
                        active={activeItem === "rock"}
                        name="rock"
                        id="player-rock"
                        onClick={this.handleClick}
                        circular icon
                        inverted>
                        <Icon name="hand rock outline" size="massive" color="black" />
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button
                        toggle
                        active={activeItem === "paper"}
                        name="paper"
                        id="player-paper"
                        onClick={this.handleClick}
                        circular icon
                        inverted>
                        <Icon name="hand paper outline" size="massive" color="black" />
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button
                        toggle
                        active={activeItem === "scissors"}
                        name="scissors"
                        id="player-scissors"
                        onClick={this.handleClick}
                        circular icon
                        inverted>
                        <Icon name="hand scissors outline" size="massive" color="black" />
                    </Button>
                </Grid.Column>
            </>
        )
    }
}

export default ButtonExampleToggle