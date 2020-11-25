import React from 'react'
import { Button } from 'semantic-ui-react'

const PlayerOneGoBtn = ({ playerOnePick, playerOneGoBtn, onClickHandler }) => {
    return (
        <>
            { playerOnePick && (
                <Button
                    disabled={playerOneGoBtn === true ? true : false}
                    id="player-go"
                    inverted color='white'
                    size="big"
                    onClick={onClickHandler}
                    style={{
                        fontFamily: "monospace",
                        foniSize: 19
                    }}>
                    <Button.Content>Go!</Button.Content>
                </Button>
            )
            }
        </>
    )
}

export default PlayerOneGoBtn;