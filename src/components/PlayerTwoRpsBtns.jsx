import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Icon } from "semantic-ui-react"

const PlayerTwoRpsBtns = () => {
  const playerTwoPick = useSelector(state => state.playerTwoPick)
  const playerTwoGoBtn = useSelector(state => state.playerTwoGoBtn)
  const dispatch = useDispatch()
  return (
    <>
      <Grid.Column>
        <Button
          disabled={playerTwoGoBtn === true ? true : false}
          active={playerTwoPick === "rock"}
          name="rock"
          id="player2-rock"
          onClick={() => dispatch({ type: "PLAYER_TWO_PICK", payload: "rock" })}
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
          onClick={() => dispatch({ type: "PLAYER_TWO_PICK", payload: "paper" })}
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
          onClick={() => dispatch({ type: "PLAYER_TWO_PICK", payload: "scissors" })}
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