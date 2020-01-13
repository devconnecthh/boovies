import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Grid } from '@material-ui/core'
import MovieItem from './MovieItem'
import MoviesFilter from './MoviesFilter'

const DISCOVER_MOVIES = gql`
  query {
    discoverMovies {
      id
      title
      poster_path
    }
  }
`

function MoviesList() {
  const { loading, error, data } = useQuery(DISCOVER_MOVIES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <>
      <MoviesFilter />
      <Grid container spacing={2} justify='center'>
        {data.discoverMovies.map(movie => (
          <Grid item key={movie.id}>
            <MovieItem {...movie} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default MoviesList
