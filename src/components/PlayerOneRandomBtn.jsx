import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import randomPick from "../helpers/randomPick";
import { Button } from 'semantic-ui-react'

const PlayerOneRandomBtn = () => {
  const playerOneGoBtn = useSelector(state => state.playerOneGoBtn)
  const dispatch = useDispatch()
  let randomItem = randomPick()
  return (
    <Button
      disabled={playerOneGoBtn === true ? true : false}
      id="player1-random"
      inverted
      size="big"
      onClick={() => dispatch({ type: 'PLAYER_ONE_RANDOM_PICK', payload: randomItem })}
      style={{
        fontFamily: "monospace",
        foniSize: 19
      }}>
      <Button.Content>Let luck decide</Button.Content>
    </Button>

  )
}

export default PlayerOneRandomBtn
