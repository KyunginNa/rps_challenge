import React from 'react'
import { Button } from 'semantic-ui-react'

const GoBtn = ({ goBtn, onClickHandlerGoBtn }) => {
    return (
        <Button
            disabled={goBtn === true ? true : false}
            id="player-go"
            inverted color='green'
            size="big"
            onClick={onClickHandlerGoBtn}>
            <Button.Content>Go!</Button.Content>
        </Button>
    )
}

export default GoBtn
