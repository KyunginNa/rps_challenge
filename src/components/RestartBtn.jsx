import React from 'react'
import { Button } from 'semantic-ui-react'

const RestartBtn = ({playerTwoGoBtn, onClickRestartBtn}) => {
  return (
    <>
    { playerTwoGoBtn &&
      (
        <Button
          id="restart"
          inverted color='purple'
          size="big"
          onClick={onClickRestartBtn}>
          <Button.Content>Start A New Game</Button.Content>
        </Button>
      )}
  </>
  )
}

export default RestartBtn
