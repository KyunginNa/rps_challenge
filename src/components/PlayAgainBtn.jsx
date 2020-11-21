import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayAgainBtn = ({ randomItem, activeItem, onClickHandlerPlayAgainBtn }) => {
  return (
    randomItem &&
    activeItem &&
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
