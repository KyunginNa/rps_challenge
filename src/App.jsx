import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PlayerOne from './components/PlayerOne'
import Computer from './components/Computer'
import ResultMessage from './components/ResultMessage'
import { Grid, Divider, Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Grid columns={2} divided>
            <Grid.Column>
              <PlayerOne />
          </Grid.Column>
          <Divider vertical/>
            <Grid.Column>
              <Computer />
            </Grid.Column>
        </Grid>
        <Segment>
          <ResultMessage />
        </Segment>
        <Footer />
      </>
    )
  }
}

export default App