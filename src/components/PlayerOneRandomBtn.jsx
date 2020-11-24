import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayerOneRandomBtn = ({ playerOneGoBtn, onClickHandler }) => {
  return (
    <Button
      disabled={playerOneGoBtn === true ? true : false}
      id="player1-random"
      inverted color='olive'
      size="big"
      onClick={onClickHandler}>
      <Button.Content>Let luck decide</Button.Content>
    </Button>

  )
}

export default PlayerOneRandomBtn
