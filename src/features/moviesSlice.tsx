import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

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

export const { createMovie } = moviesSlice.actions
export const selectAllMovies = (state: RootState) => state.movies.movies
export default moviesSlice.reducer
