import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Grid, Button, Icon } from "semantic-ui-react"

const PlayerOneRpsBtns = () => {
  const playerOnePick = useSelector(state => state.playerOnePick)
  const playerOneGoBtn = useSelector(state => state.playerOneGoBtn)
  const dispatch = useDispatch()
  return (
    <>
      <Grid.Column>
        <Button
          disabled={playerOneGoBtn === true ? true : false}
          active={playerOnePick === "rock"}
          name="rock"
          data-cy="player1-rock"
          onClick={() => dispatch({ type: "PLAYER_ONE_PICK", payload: "rock" })}
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
          disabled={playerOneGoBtn === true ? true : false}
          active={playerOnePick === "paper"}
          name="paper"
          data-cy="player1-paper"
          onClick={() => dispatch({ type: "PLAYER_ONE_PICK", payload: "paper" })}
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
          disabled={playerOneGoBtn === true ? true : false}
          active={playerOnePick === "scissors"}
          name="scissors"
          data-cy="player1-scissors"
          onClick={() => dispatch({ type: "PLAYER_ONE_PICK", payload: "scissors" })}
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

export default PlayerOneRpsBtns