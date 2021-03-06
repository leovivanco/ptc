import React, { useEffect } from 'react'
import { selectUser } from 'features/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import db, { auth } from 'firebaseConfig'
import { selectAllMovies, createMovie } from 'features/moviesSlice'

const Movies = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const movies = useSelector(selectAllMovies)

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) =>
      //dispatch(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
    )
  }, [])

  const handleCreateMovie = () => {
    // db.collection('movies').add({
    //   name: 'I Am Legend',
    //   genre: 'Action',
    //   release: '2007'
    // })
    dispatch(
      createMovie({
        name: 'I Am Legend',
        genre: 'Action',
        release: '2007'
      })
    )
  }

  const signOut = (e) => {
    e.preventDefault()
    auth.signOut()
  }
  console.log('User:', user)
  console.log('Movies:', movies)
  return (
    <div>
      User: {user && user.name} <button onClick={signOut}>Logout</button>
      <button onClick={handleCreateMovie}>Create Movie</button>
      {movies && movies.map((movie) => <p>{movie.name}</p>)}
    </div>
  )
}

export default Movies
