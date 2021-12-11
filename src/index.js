import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './Store'
import { saveState } from './LocalStorage'
import LandingMain from './LandingMain'
import LandingHeader from './LandingHeader'
import LandingFooter from './LandingFooter'

// Saving current state to local storage
store.subscribe(() => {
  saveState({
      code: store.getState().code,
      short_link: store.getState().short_link,
      full_short_link: store.getState().full_short_link,
      short_link2: store.getState().short_link2,
      full_short_link2: store.getState().full_short_link2,
      share_link: store.getState().share_link,
      full_share_link: store.getState().full_share_link,
      original_link: store.getState().original_link
  })
})

// Rendering on page
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LandingHeader />
      <LandingMain />
      <LandingFooter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)