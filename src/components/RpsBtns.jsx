import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const RpsBtns = props => {
    return (
        <>
            <Grid.Column>
                <Button
                    disabled={props.goBtn===true ? true : false}
                    toggle
                    active={props.activeItem === "rock"}
                    name="rock"
                    id="player-rock"
                    onClick={props.handleClick}
                    circular icon
                    inverted>
                    <Icon name="hand rock outline" size="massive" color="black" />
                </Button>
            </Grid.Column>
            <Grid.Column>
                <Button
                    disabled={props.goBtn===true ? true : false}
                    toggle
                    active={props.activeItem === "paper"}
                    name="paper"
                    id="player-paper"
                    onClick={props.handleClick}
                    circular icon
                    inverted>
                    <Icon name="hand paper outline" size="massive" color="black" />
                </Button>
            </Grid.Column>
            <Grid.Column>
                <Button
                    disabled={props.goBtn===true ? true : false}
                    toggle
                    active={props.activeItem === "scissors"}
                    name="scissors"
                    id="player-scissors"
                    onClick={props.handleClick}
                    circular icon
                    inverted>
                    <Icon name="hand scissors outline" size="massive" color="black" />
                </Button>
            </Grid.Column>
        </>
    )
}

export default RpsBtns