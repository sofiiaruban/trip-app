import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Trip } from '@app/types/types'
import initialTrips from '@app/initialTrips'

const initialState: Trip[] = initialTrips

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addTrip(state, action: PayloadAction<Trip>) {
      state.push(action.payload)
    }
  }
})

export const { addTrip } = tripSlice.actions
export default tripSlice.reducer
