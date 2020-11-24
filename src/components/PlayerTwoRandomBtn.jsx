import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayerTwoRandomBtn = ({ playerTwoGoBtn, onClickHandler }) => {
  return (
    <Button
      disabled={playerTwoGoBtn === true ? true : false}
      id="player2-random"
      inverted color='olive'
      size="big"
      onClick={onClickHandler}>
      <Button.Content>Let luck decide</Button.Content>
    </Button>

  )
}

export default PlayerTwoRandomBtn
