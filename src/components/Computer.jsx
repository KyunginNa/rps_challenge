import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Computer = props => {
    const activeItem = props.activeItem
    const goBtn = props.goBtn
    const randomItem = props.randomItem
   
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
