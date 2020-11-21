import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Computer = ({ activeItem, goBtn, randomItem }) => {

    return (
        <>
            <Header id="computer-header" as="h2" textAlign="center">Computer</Header>
            {activeItem && goBtn && (
                <Icon id="computer-pick" name={`hand ${randomItem} outline`} size="massive" color="black" />
            )}

        </>
    )
}

export default Computer
