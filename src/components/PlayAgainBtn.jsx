import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayAgainBtn = ({ randomItem, playerOnePick, onClickHandlerPlayAgainBtn }) => {
  return (
    randomItem &&
    playerOnePick &&
    (
      <Button
        id="play-again"
        inverted color='red'
        size="big"
        onClick={onClickHandlerPlayAgainBtn}>
        <Button.Content>Play Again!</Button.Content>
      </Button>
    )
  )
}

export default PlayAgainBtn
