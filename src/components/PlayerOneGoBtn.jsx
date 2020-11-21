import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayerOneGoBtn = ({ playerOneGoBtn, onClickHandlerplayerOneGoBtn }) => {
    return (
        <>
            <Button
                disabled={playerOneGoBtn === true ? true : false}
                id="player-go"
                inverted color='green'
                size="big"
                onClick={onClickHandlerplayerOneGoBtn}>
                <Button.Content>Go!</Button.Content>
            </Button>
        </>
    )
}

export default PlayerOneGoBtn
