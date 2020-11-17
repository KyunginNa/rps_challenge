import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PlayerOne from './components/PlayerOne'
import Computer from './components/Computer'
import { Grid, Divider } from 'semantic-ui-react'

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
        <Footer />
      </>
    )
  }
}

export default App