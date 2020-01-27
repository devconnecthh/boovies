import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { CircularProgress, Grid } from '@material-ui/core'
import MovieItem from './MovieItem'
import MoviesFilter from './MoviesFilter'
import { LAST_RELEASE_YEAR } from '../config'

const DISCOVER_MOVIES = gql`
  query movies($year: Int) {
    movies(filter: { year: $year }) {
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

  let gridContent

  if (loading) {
    gridContent = <CircularProgress />
  } else if (error) {
    gridContent = <p>Error!</p>
  } else {
    gridContent = data.movies.map(movie => (
      <Grid item key={movie.id}>
        <MovieItem {...movie} />
      </Grid>
    ))
  }

  return (
    <>
      <MoviesFilter year={year} onYearChange={setYear} />
      <Grid container spacing={2} justify='center'>
        {gridContent}
      </Grid>
    </>
  )
}

export default MoviesList
