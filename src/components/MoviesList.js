import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const DISCOVER_MOVIES = gql`
  query {
    discoverMovies {
      id
      title
    }
  }
`

function MoviesList() {
  const { loading, error, data } = useQuery(DISCOVER_MOVIES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return data.discoverMovies.map(({ id, title }) => (
    <div key={id}>
      <p>{title}</p>
    </div>
  ))
}

export default MoviesList
