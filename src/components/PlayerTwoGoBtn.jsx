import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { returnResultOfRPS } from "../helpers/rpsHelper"
import { Button } from "semantic-ui-react"

const PlayerTwoGoBtn = () => {
  const playerOnePick = useSelector(state => state.playerOnePick)
  const playerTwoPick = useSelector(state => state.playerTwoPick)
  const playerTwoGoBtn = useSelector(state => state.playerTwoGoBtn)
  const dispatch = useDispatch()
  const onClickHandler = () => {
    const [message, score] = returnResultOfRPS(playerOnePick, playerTwoPick)
    dispatch({ type: "PLAYER_TWO_GO", payload: { message: message, score: score } })
  }

  return (
    <>
      <Button
        disabled={playerTwoPick && !playerTwoGoBtn ? false : true}
        id="player2-go"
        inverted
        size="big"
        onClick={onClickHandler}
        style={{
          fontFamily: "monospace",
          foniSize: 19
        }}>
        <Button.Content>Go!</Button.Content>
      </Button>
    </>
  )
}

export default PlayerTwoGoBtn
