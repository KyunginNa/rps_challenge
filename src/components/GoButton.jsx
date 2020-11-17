import React from 'react'
import { Button } from 'semantic-ui-react'

const GoButton = () => {
    return (
        <Button id="player-go" inverted color='green' size="big">
            <Button.Content visible>Go!</Button.Content>
        </Button>
    )
}

export default GoButton
