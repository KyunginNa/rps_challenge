import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayerOneGoBtn = ({ playerOneGoBtn, onClickHandler }) => {
    return (
        <>
            <Button
                disabled={playerOneGoBtn === true ? true : false}
                id="player-go"
                inverted color='green'
                size="big"
                onClick={onClickHandler}>
                <Button.Content>Go!</Button.Content>
            </Button>
        </>
    )
}

export default PlayerOneGoBtn
