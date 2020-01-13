import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import MoviesList from './MoviesList'
import MoviePage from './MoviePage'

const client = new ApolloClient({
  uri: 'http://lokalhost:4000/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Router>
          <Switch>
            <Route exact path='/'>
              <MoviesList />
            </Route>
            <Route path='/:id'>
              <MoviePage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ApolloProvider>
  )
}

export default App
