import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayAgainBtn = ({ playerTwoGoBtn, onClickPlayAgainBtn }) => {
  return (
    <>
      { playerTwoGoBtn &&
        (
          <Button
            id="play-again"
            inverted color='white'
            size="big"
            onClick={onClickPlayAgainBtn}
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
