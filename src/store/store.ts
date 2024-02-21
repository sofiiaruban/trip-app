import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherDataApi } from '../services/weatherDataApi'
import tripReducer from './tripSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  [weatherDataApi.reducerPath]: weatherDataApi.reducer,
  trips: tripReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(weatherDataApi.middleware)
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
