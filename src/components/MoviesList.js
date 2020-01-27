import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { CircularProgress, Grid } from '@material-ui/core'
import MovieItem from './MovieItem'
import YearFilter from './filters/YearFilter'
import GenresFilter from './filters/GenresFilter'
import { LAST_RELEASE_YEAR } from '../config'
import { Container } from '@material-ui/core'

const DISCOVER_MOVIES = gql`
  query movies($year: Int, $genres: [Int!]) {
    movies(filter: { year: $year, genres: $genres }) {
      id
      title
      poster_path
    }
  }
`

function MoviesList() {
  const [year, setYear] = useState(LAST_RELEASE_YEAR)
  const [genres, setGenres] = useState([])
  const { loading, error, data } = useQuery(DISCOVER_MOVIES, {
    variables: { year, genres },
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
      <Container maxWidth='md'>
        <YearFilter year={year} onYearChange={setYear} />
        <GenresFilter genres={genres} onGenresChange={setGenres} />
      </Container>
      <Grid container spacing={2} justify='center'>
        {gridContent}
      </Grid>
    </>
  )
}

export default MoviesList
