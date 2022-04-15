import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getFruits } from '../apis/fruits'

export const fetchFruits = createAsyncThunk('fruits/fetchFruits', async () => {
  return await getFruits()
})

const fruitsSlice = createSlice({
  name: 'fruits',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchFruits.fulfilled]: (_, { payload }) => {
      return payload
    },
  },
})

export const fruitsSelector = (state) => state.fruits
export default fruitsSlice.reducer
