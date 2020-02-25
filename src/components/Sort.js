import React from 'react'
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import { MOVIE_SORTINGS } from '../config'

function Sort({ value, onChange }) {
  return (
    <FormControl>
      <InputLabel id='movies-sort'>Sort</InputLabel>
      <Select
        labelId='movies-sort'
        value={value}
        onChange={e => {
          onChange(e.target.value)
        }}
      >
        {MOVIE_SORTINGS.map(value => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Sort
