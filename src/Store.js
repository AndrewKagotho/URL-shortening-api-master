import { createStore } from 'redux'
import reducer from './Reducer'
import { loadState } from './LocalStorage'

// Assigning parsed object from local storage to variable
const persistedState = loadState()

// Initializing store
export const initialState = { 
  code: [],
  short_link: [],
  full_short_link: [],
  short_link2: [],
  full_short_link2: [],
  share_link: [],
  full_share_link: [],
  original_link: [],
  persistedState
 }

// Creating store
export const store = createStore(reducer, persistedState)