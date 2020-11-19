import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayAgainBtn = props => {
  return (
    props.randomItem &&
    props.activeItem &&
    (
      <Button
        id="play-again"
        inverted color='red'
        size="big"
        onClick={props.onClickHandlerPlayAgainBtn}>
        <Button.Content>Play Again!</Button.Content>
      </Button>
    )
  )
}

export default PlayAgainBtn
