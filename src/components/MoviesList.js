import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Grid } from '@material-ui/core'
import MovieItem from './MovieItem'
import MoviesFilter from './MoviesFilter'
import { LAST_RELEASE_YEAR } from '../config'

const DISCOVER_MOVIES = gql`
  query discoverMovies($year: Int) {
    discoverMovies(filter: { year: $year }) {
      id
      title
      poster_path
    }
  }
`

function MoviesList() {
  const [year, setYear] = useState(LAST_RELEASE_YEAR)
  const { loading, error, data } = useQuery(DISCOVER_MOVIES, {
    variables: { year },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <>
      <MoviesFilter year={year} onYearChange={setYear} />
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
