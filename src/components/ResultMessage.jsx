import React from 'react'
import { rpsHelper } from '../helpers/rpsHelper'

const ResultMessage = props => {
    return (
        <h2 id="result-message">
            { props.activeItem &&
                props.randomItem && (
                    rpsHelper(props.activeItem, props.randomItem)
                )}
        </h2>
    )
}

export default ResultMessage
