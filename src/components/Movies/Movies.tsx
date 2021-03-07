import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import db from 'firebaseConfig'
import {
  selectAllMovies,
  //createMovie,
  createMovieAsync
} from 'features/moviesSlice'
import { Button } from '@material-ui/core'

const Movies = () => {
  const dispatch = useDispatch()
  const movies = useSelector(selectAllMovies)

  useEffect(() => {
    console.log(movies.length)
    if (movies.length === 0) {
      // console.log('if', movies.length)
      // db.collection('movies').onSnapshot((snapshot) => {
      //   snapshot.docs.map((doc) =>
      //     dispatch(
      //       setAllMovies({
      //         id: doc.id,
      //         ...doc.data()
      //       })
      //     )
      //   )
      // })
      const getMarker = async () => {
        const snapshot = await db.collection('movies').get()
        return snapshot.docs.map((doc) => doc.data())
      }
      getMarker().then((el) => console.log(el))
    }
  }, [movies])

  // const handleCreateMovie = () => {
  //   console.log('handleCreateMovie')
  //   db.collection('movies')
  //     .add({
  //       name: 'Carimbu 2',
  //       genre: 'Action',
  //       release: '2007'
  //     })
  //     .then((docRef) => {
  //       console.log('Document written with ID: ', docRef.id)
  //     })
  //     .catch((error) => {
  //       console.error('Error adding document: ', error)
  //     })
  // }

  // console.log('User:', user)
  // console.log('Movies:', movies)
  return (
    <div>
      <Button
        variant="contained"
        onClick={() =>
          dispatch(
            createMovieAsync({
              name: 'O altar',
              genre: 'O altar',
              release: '2021'
            })
          )
        }
        color="primary"
      >
        Create Movie
      </Button>
      {movies && movies.map((movie) => <p>{movie.name}</p>)}
    </div>
  )
}

export default Movies
