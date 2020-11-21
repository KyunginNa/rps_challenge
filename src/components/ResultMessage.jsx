import React from 'react'
import { rpsHelper } from '../helpers/rpsHelper'

const ResultMessage = ({ playerOnePick, randomItem }) => {
    return (
        <h1 id="result-message">
            { playerOnePick &&
                randomItem && (
                    rpsHelper(playerOnePick, randomItem)
                )}
        </h1>
    )
}

export default ResultMessage
