import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const PlayerOneRpsBtns = ({ playerOnePick, onClickHandler, playerOneGoBtn }) => {
  return (
    <>
      <Grid.Column>
        <Button
          disabled={playerOneGoBtn === true ? true : false}
          active={playerOnePick === "rock"}
          name="rock"
          id="player1-rock"
          onClick={onClickHandler}
          circular icon
          color="teal">
          <Icon
            name="hand rock"
            size="massive"
            inverted />
        </Button>
      </Grid.Column>
      <Grid.Column>
        <Button
          disabled={playerOneGoBtn === true ? true : false}
          active={playerOnePick === "paper"}
          name="paper"
          id="player1-paper"
          onClick={onClickHandler}
          circular icon
          color="teal">
          <Icon
            name="hand paper"
            size="massive"
            color="white" />
        </Button>
      </Grid.Column>
      <Grid.Column>
        <Button
          disabled={playerOneGoBtn === true ? true : false}
          active={playerOnePick === "scissors"}
          name="scissors"
          id="player1-scissors"
          onClick={onClickHandler}
          circular icon
          color="teal">
          <Icon
            name="hand scissors"
            size="massive"
            color="white" />
        </Button>
      </Grid.Column>
    </>
  )
}

export default PlayerOneRpsBtns