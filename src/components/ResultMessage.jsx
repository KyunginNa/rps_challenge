import React from 'react'
import { rpsHelper } from '../helpers/rpsHelper'

const ResultMessage = ({ playerOnePick, playerTwoPick, playerTwoPicked }) => {
    return (
        <h1 id="result-message">
            { playerOnePick && playerTwoPick && playerTwoPicked && (
                rpsHelper(playerOnePick, playerTwoPick)
            )}
        </h1>
    )
}

export default ResultMessage
