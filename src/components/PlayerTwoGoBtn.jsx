import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayerTwoGoBtn = ({ playerTwoGoBtn, onClickHandler }) => {
    return (
        <>
            <Button
                disabled={playerTwoGoBtn === true ? true : false}
                id="player2-go"
                inverted color='green'
                size="big"
                onClick={onClickHandler}>
                <Button.Content>Go!</Button.Content>
            </Button>
        </>
    )
}

export default PlayerTwoGoBtn
