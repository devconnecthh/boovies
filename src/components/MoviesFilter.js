import React from 'react'
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'

const FIRST_RELEASE_YEAR = 1970
const LAST_RELEASE_YEAR = new Date().getFullYear()
const AMOUNT_OF_YEARS = LAST_RELEASE_YEAR + 1 - FIRST_RELEASE_YEAR
const RELEASE_YEARS = [...Array(AMOUNT_OF_YEARS).keys()]
  .map(value => value + FIRST_RELEASE_YEAR)
  .reverse()

function MoviesFilter() {
  return (
    <div>
      <FormControl>
        <InputLabel id='movies-filter-years'>Age</InputLabel>
        <Select
          labelId='movies-filter-years'
          value={LAST_RELEASE_YEAR}
          onChange={() => {}}
        >
          {RELEASE_YEARS.map(year => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default MoviesFilter
