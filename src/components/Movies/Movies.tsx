import React, { useEffect, useState } from 'react'
import db from 'firebaseConfig'
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import { TableCell } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  table: {
    minWidth: 450
  }
})

const Movies = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    if (!movies.length) {
      const getMovies = async () => {
        const snapshot = await db.collection('movies').get()
        return snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      }
      getMovies().then((resultMovies) => setMovies([...resultMovies]))
    }
  }, [movies])

  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Movie</TableCell>
            <TableCell align="right">Categorie</TableCell>
            <TableCell align="right">Genre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell component="th" scope="row">
                {movie.name}
              </TableCell>
              <TableCell align="right">{movie.genre}</TableCell>
              <TableCell align="right">{movie.release}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Movies
