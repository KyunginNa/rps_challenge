import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayAgainBtn = ({ playerTwoPicked, onClickPlayAgainBtn }) => {
  return (
    <>
      { playerTwoPicked &&
        (
          <Button
            id="play-again"
            inverted color='red'
            size="big"
            onClick={onClickPlayAgainBtn}>
            <Button.Content>Play Again!</Button.Content>
          </Button>
        )}
    </>
  )
}

export default PlayAgainBtn
