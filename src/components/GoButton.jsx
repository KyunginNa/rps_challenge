import React from 'react'
import { Button } from 'semantic-ui-react'

const GoButton = props => {
    return (
        <Button
            disabled={props.goBtn===true ? true : false}
            id="player-go"
            inverted color='green'
            size="big"
            onClick={props.onClickHandlerGoBtn}>
            <Button.Content>Go!</Button.Content>
        </Button>
    )
}

export default GoButton
