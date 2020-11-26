import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const PlayerTwoRpsBtns = ({ playerTwoPick, onClickHandler, playerTwoGoBtn }) => {
  return (
    <>
      <Grid.Column>
        <Button
          disabled={playerTwoGoBtn === true ? true : false}
          active={playerTwoPick === "rock"}
          name="rock"
          id="player2-rock"
          onClick={onClickHandler}
          icon
          inverted>
          <Icon
            name="hand rock"
            size="massive"
            color="teal" />
        </Button>
      </Grid.Column>
      <Grid.Column>
        <Button
          disabled={playerTwoGoBtn === true ? true : false}
          active={playerTwoPick === "paper"}
          name="paper"
          id="player2-paper"
          onClick={onClickHandler}
          icon
          inverted>
          <Icon
            name="hand paper"
            size="massive"
            color="teal" />
        </Button>
      </Grid.Column>
      <Grid.Column>
        <Button
          disabled={playerTwoGoBtn === true ? true : false}
          active={playerTwoPick === "scissors"}
          name="scissors"
          id="player2-scissors"
          onClick={onClickHandler}
          icon
          inverted>
          <Icon
            name="hand scissors"
            size="massive"
            color="teal" />
        </Button>
      </Grid.Column>
    </>
  )
}

export default PlayerTwoRpsBtns