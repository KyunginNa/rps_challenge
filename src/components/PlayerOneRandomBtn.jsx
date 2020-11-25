import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayerOneRandomBtn = ({ playerOneGoBtn, onClickHandler }) => {
  return (
    <Button
      disabled={playerOneGoBtn === true ? true : false}
      id="player1-random"
      inverted color='white'
      size="big"
      onClick={onClickHandler}
      style={{
        fontFamily: "monospace",
        foniSize: 19
      }}>
      <Button.Content>Let luck decide</Button.Content>
    </Button>

  )
}

export default PlayerOneRandomBtn
