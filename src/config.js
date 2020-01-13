export const FIRST_RELEASE_YEAR = 1970
export const LAST_RELEASE_YEAR = new Date().getFullYear()
export const AMOUNT_OF_YEARS = LAST_RELEASE_YEAR + 1 - FIRST_RELEASE_YEAR
export const RELEASE_YEARS = [...Array(AMOUNT_OF_YEARS).keys()]
  .map(value => value + FIRST_RELEASE_YEAR)
  .reverse()
