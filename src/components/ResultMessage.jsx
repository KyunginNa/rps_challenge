import React from 'react'
import { rpsHelper } from '../helpers/rpsHelper'

const ResultMessage = props => {
    return (
        <h1 id="result-message">
            { props.activeItem &&
                props.randomItem && (
                    rpsHelper(props.activeItem, props.randomItem)
                )}
        </h1>
    )
}

export default ResultMessage
