import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayerOneGoBtn = ({ playerOnePick, playerOneGoBtn, onClickHandler }) => {
  return (
    <>
      <Button
        disabled={playerOnePick && !playerOneGoBtn ? false : true}
        id="player1-go"
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

export default PlayerOneGoBtn;