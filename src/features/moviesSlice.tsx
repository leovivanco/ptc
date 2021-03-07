import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import db, { auth } from 'firebaseConfig'

const initialState = {
  movies: [] as any
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setAllMovies: (state, action: any) => {
      state.movies.push(...action.payload)
    },
    createMovie: (state, action: any) => {
      state.movies.push(action.payload)
    }
  }
})

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const { createMovie, setAllMovies } = moviesSlice.actions
export const createMovieAsync = (amount) => (dispatch) => {
  db.collection('movies')
    .add(amount)
    .then((docRef) => {
      dispatch(createMovie(amount))
    })
    .catch((error) => {
      console.error('Error adding document: ', error)
    })
}
export const selectAllMovies = (state: RootState) => state.movies.movies
export default moviesSlice.reducer
