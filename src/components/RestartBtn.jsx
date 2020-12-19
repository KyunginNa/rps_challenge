import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "semantic-ui-react"

const RestartBtn = () => {
  const playerTwoGoBtn = useSelector(state => state.playerTwoGoBtn)
  const dispatch = useDispatch()
  return (
    <>
      { playerTwoGoBtn &&
        (
          <Button
            id="restart"
            inverted
            size="big"
            onClick={() => dispatch({ type: "RESTART" })}
            style={{
              fontFamily: "monospace",
              foniSize: 19
            }}>
            <Button.Content>Start A New Game</Button.Content>
          </Button>
        )}
    </>
  )
}

export default RestartBtn
