import React from 'react'
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core'
import { RELEASE_YEARS } from '../../config'

function YearFilter({ year, onYearChange }) {
  return (
    <FormControl>
      <InputLabel id='movies-filter-years'>Year</InputLabel>
      <Select
        labelId='movies-filter-years'
        value={year}
        onChange={e => {
          onYearChange(e.target.value)
        }}
      >
        {RELEASE_YEARS.map(year => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default YearFilter
