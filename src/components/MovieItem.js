import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardHeader, CardMedia } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  card: {
    width: '300px',
  },
  media: {
    paddingTop: '450px',
  },
}))

function MovieItem({ title, poster_path }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader title={title} />
      <CardMedia className={classes.media} image={poster_path} title={title} />
    </Card>
  )
}

export default MovieItem
