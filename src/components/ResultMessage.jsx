import React from 'react'
import { rpsHelper } from '../helpers/rpsHelper'

const ResultMessage = ({ activeItem, randomItem }) => {
    return (
        <h1 id="result-message">
            { activeItem &&
                randomItem && (
                    rpsHelper(activeItem, randomItem)
                )}
        </h1>
    )
}

export default ResultMessage
