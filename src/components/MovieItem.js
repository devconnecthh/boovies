import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardHeader, CardMedia } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
  },
  card: {
    width: '300px',
  },
  media: {
    paddingTop: '450px',
  },
}))

function MovieItem({ id, title, poster_path }) {
  const classes = useStyles()

  return (
    <Link className={classes.link} to={{ pathname: id }}>
      <Card className={classes.card}>
        <CardHeader title={title} />
        <CardMedia
          className={classes.media}
          image={poster_path}
          title={title}
        />
      </Card>
    </Link>
  )
}

export default MovieItem
