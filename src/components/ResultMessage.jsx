import React from 'react'
import { rpsHelper } from '../helpers/rpsHelper'

const ResultMessage = ({ playerOnePick, playerTwoPick, playerTwoGoBtn }) => {
    return (
        <h1 id="result-message">
            { playerOnePick && playerTwoPick && playerTwoGoBtn && (
                rpsHelper(playerOnePick, playerTwoPick)
            )}
        </h1>
    )
}

export default ResultMessage
