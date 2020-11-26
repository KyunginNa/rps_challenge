import React from 'react'
import { Segment } from 'semantic-ui-react'

const Header = () => {
  return (
    <Segment
      id="header"
      size="medium"
      inverted color="teal"
      vertical
      textAlign="center"
      style={{ fontFamily: "monospace" }}
    >
      Play Rock Paper Scissors with your friend!🤩
    </Segment>
  )
}

export default Header