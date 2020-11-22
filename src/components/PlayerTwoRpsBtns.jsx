import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const PlayerTwoRpsBtns = ({ playerTwoPick, onClickHandler, playerTwoGoBtn }) => {
  return (
    <>
      <Grid.Column>
        <Button
          disabled={playerTwoGoBtn === true ? true : false}
          toggle
          active={playerTwoPick === "rock"}
          name="rock"
          id="player2-rock"
          onClick={onClickHandler}
          circular icon
          inverted>
          <Icon name="hand rock outline" size="massive" color="black" />
        </Button>
      </Grid.Column>
      <Grid.Column>
        <Button
          disabled={playerTwoGoBtn === true ? true : false}
          toggle
          active={playerTwoPick === "paper"}
          name="paper"
          id="player2-paper"
          onClick={onClickHandler}
          circular icon
          inverted>
          <Icon name="hand paper outline" size="massive" color="black" />
        </Button>
      </Grid.Column>
      <Grid.Column>
        <Button
          disabled={playerTwoGoBtn === true ? true : false}
          toggle
          active={playerTwoPick === "scissors"}
          name="scissors"
          id="player2-scissors"
          onClick={onClickHandler}
          circular icon
          inverted>
          <Icon name="hand scissors outline" size="massive" color="black" />
        </Button>
      </Grid.Column>
    </>
  )
}

export default PlayerTwoRpsBtns