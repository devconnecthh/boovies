import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Container } from '@material-ui/core'
import MoviesList from './MoviesList'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <MoviesList />
      </Container>
    </ApolloProvider>
  )
}

export default App
