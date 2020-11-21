import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const RpsBtns = ({ goBtn, activeItem, handleClick }) => {
    return (
        <>
            <Grid.Column>
                <Button
                    disabled={goBtn === true ? true : false}
                    toggle
                    active={activeItem === "rock"}
                    name="rock"
                    id="player-rock"
                    onClick={handleClick}
                    circular icon
                    inverted>
                    <Icon name="hand rock outline" size="massive" color="black" />
                </Button>
            </Grid.Column>
            <Grid.Column>
                <Button
                    disabled={goBtn === true ? true : false}
                    toggle
                    active={activeItem === "paper"}
                    name="paper"
                    id="player-paper"
                    onClick={handleClick}
                    circular icon
                    inverted>
                    <Icon name="hand paper outline" size="massive" color="black" />
                </Button>
            </Grid.Column>
            <Grid.Column>
                <Button
                    disabled={goBtn === true ? true : false}
                    toggle
                    active={activeItem === "scissors"}
                    name="scissors"
                    id="player-scissors"
                    onClick={handleClick}
                    circular icon
                    inverted>
                    <Icon name="hand scissors outline" size="massive" color="black" />
                </Button>
            </Grid.Column>
        </>
    )
}

export default RpsBtns