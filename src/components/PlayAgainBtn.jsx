import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "semantic-ui-react"

const PlayAgainBtn = () => {
  const playerTwoGoBtn = useSelector(state => state.playerTwoGoBtn)
  const dispatch = useDispatch()
  return (
    <>
      { playerTwoGoBtn &&
        (
          <Button
            data-cy="play-again"
            inverted
            size="big"
            onClick={() => dispatch({ type: "PLAY_AGAIN" })}
            style={{
              fontFamily: "monospace",
              foniSize: 19
            }}>
            <Button.Content>Play Again!</Button.Content>
          </Button>
        )}
    </>
  )
}

export default PlayAgainBtn
