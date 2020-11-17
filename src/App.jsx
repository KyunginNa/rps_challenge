import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PlayerOne from './components/PlayerOne'
import Computer from './components/Computer'
import { Grid, Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Segment><PlayerOne /></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment><Computer /></Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </>
    )
  }
}

export default App