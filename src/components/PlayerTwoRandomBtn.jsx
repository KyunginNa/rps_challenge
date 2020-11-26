import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayerTwoRandomBtn = ({ playerTwoGoBtn, onClickHandler }) => {
  return (
    <Button
      disabled={playerTwoGoBtn === true ? true : false}
      id="player2-random"
      inverted
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

export default PlayerTwoRandomBtn
