import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const PlayerOneRpsBtns = ({ playerOnePick, onClickHandler, playerOneGoBtn }) => {
    return (
        <>
            <Grid.Column>
                <Button
                    disabled={playerOneGoBtn === true ? true : false}
                    toggle
                    active={playerOnePick === "rock"}
                    name="rock"
                    id="player-rock"
                    onClick={onClickHandler}
                    circular icon
                    inverted>
                    <Icon name="hand rock outline" size="massive" color="black" />
                </Button>
            </Grid.Column>
            <Grid.Column>
                <Button
                    disabled={playerOneGoBtn === true ? true : false}
                    toggle
                    active={playerOnePick === "paper"}
                    name="paper"
                    id="player-paper"
                    onClick={onClickHandler}
                    circular icon
                    inverted>
                    <Icon name="hand paper outline" size="massive" color="black" />
                </Button>
            </Grid.Column>
            <Grid.Column>
                <Button
                    disabled={playerOneGoBtn === true ? true : false}
                    toggle
                    active={playerOnePick === "scissors"}
                    name="scissors"
                    id="player-scissors"
                    onClick={onClickHandler}
                    circular icon
                    inverted>
                    <Icon name="hand scissors outline" size="massive" color="black" />
                </Button>
            </Grid.Column>
        </>
    )
}

export default PlayerOneRpsBtns