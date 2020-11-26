import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayerTwoGoBtn = ({ playerTwoPick, playerTwoGoBtn, onClickHandler }) => {
  return (
    <>
      <Button
        disabled={playerTwoPick && !playerTwoGoBtn ? false : true}
        id="player2-go"
        inverted
        size="big"
        onClick={onClickHandler}
        style={{
          fontFamily: "monospace",
          foniSize: 19
        }}>
        <Button.Content>Go!</Button.Content>
      </Button>
    </>
  )
}

export default PlayerTwoGoBtn
