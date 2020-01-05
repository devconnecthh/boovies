import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Hello Boovies!</h1>
      </div>
    </ApolloProvider>
  )
}

export default App
