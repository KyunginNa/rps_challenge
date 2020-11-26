import React from 'react'
import { Button } from 'semantic-ui-react'

const RestartBtn = ({ playerTwoGoBtn, onClickRestartBtn }) => {
  return (
    <>
      { playerTwoGoBtn &&
        (
          <Button
            id="restart"
            inverted
            size="big"
            onClick={onClickRestartBtn}
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
