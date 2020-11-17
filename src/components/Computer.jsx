import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Computer = props => {
    const activeItem = props.activeItem
    const goBtn = props.goBtn
    const rpsArray = ["rock", "paper", "scissors"]
    const randomItem = rpsArray[Math.floor(Math.random() * rpsArray.length)]
    return (
        <>
            <Header id="computer-header" as="h2" textAlign="center">Computer</Header>
            {activeItem && goBtn && (
                <Icon id="computer-pick" name={`hand ${randomItem} outline`} outline size="massive" color="black" />
            )}

        </>
    )
}

export default Computer
