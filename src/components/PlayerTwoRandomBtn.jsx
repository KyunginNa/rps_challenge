import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { returnResultOfRPS } from "../helpers/rpsHelper";
import randomPick from "../helpers/randomPick";
import { Button } from "semantic-ui-react";

const PlayerTwoRandomBtn = () => {
  const playerOnePick = useSelector(state => state.playerOnePick)
  const playerTwoGoBtn = useSelector(state => state.playerTwoGoBtn)
  const dispatch = useDispatch()
  const randomItem = randomPick()
  const onClickHandler = () => {
    const [message, score] = returnResultOfRPS(playerOnePick, randomItem)
    dispatch({ type: "PLAYER_TWO_RANDOM", payload: { playerTwoPick: randomItem, message: message, score: score } })
  }

  return (
    <Button
      disabled={playerTwoGoBtn === true ? true : false}
      id="player2-random"
      inverted
      size="big"
      onClick={onClickHandler}
      style={{
        fontFamily: "monospace",
        foniSize: 19
      }}>
      <Button.Content>Let luck decide</Button.Content>
    </Button>

  )
}

export default PlayerTwoRandomBtn
