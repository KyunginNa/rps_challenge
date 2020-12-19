import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "semantic-ui-react"

const PlayerOneGoBtn = () => {
  const playerOnePick = useSelector(state => state.playerOnePick)
  const playerOneGoBtn = useSelector(state => state.playerOneGoBtn)
  const dispatch = useDispatch()
  return (
    <>
      <Button
        disabled={playerOnePick && !playerOneGoBtn ? false : true}
        id="player1-go"
        inverted
        size="big"
        onClick={() => dispatch({ type: "PLAYER_ONE_GO" })}
        style={{
          fontFamily: "monospace",
          foniSize: 19
        }}>
        <Button.Content>Go!</Button.Content>
      </Button>
    </>
  )
}

export default PlayerOneGoBtn