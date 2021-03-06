import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Typography, Chip } from '@material-ui/core'

const GET_MOVIE_INFO = gql`
  query movie($id: Int!) {
    movie(id: $id) {
      title
      overview
      genres {
        name
      }
    }
  }
`

function MoviePage() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_MOVIE_INFO, {
    variables: { id: Number(id) },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { title, overview, genres } = data && data.movie
  const genreNames = genres.map(({ name }) => name)

  return (
    <div>
      <Typography variant='h4' component='h1' gutterBottom>
        {title}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        {overview}
      </Typography>
      {genreNames.map(name => (
        <Chip key={name} label={name} />
      ))}
    </div>
  )
}

export default MoviePage
