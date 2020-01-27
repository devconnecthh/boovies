import React from 'react'
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { CircularProgress } from '@material-ui/core'

const GENRES = gql`
  query genres {
    genres {
      id
      name
    }
  }
`

function GenresFilter({ genres, onGenresChange }) {
  const { error, loading, data } = useQuery(GENRES)

  if (error) {
    return <p>{error.message}</p>
  }

  if (loading) {
    return <CircularProgress />
  }

  return (
    <FormControl>
      <InputLabel id='movies-filter-genres'>Genres</InputLabel>
      <Select
        multiple
        labelId='movies-filter-genres'
        value={genres}
        onChange={e => {
          onGenresChange(e.target.value)
        }}
      >
        {data.genres.map(genre => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default GenresFilter
