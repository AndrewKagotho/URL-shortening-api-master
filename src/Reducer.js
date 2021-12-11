import { initialState } from './Store'

export default function reducer(state = initialState, action) {
    switch(action.type){
      case 'SHORTEN LINK':
        return { ...state,
          // Order reversed to show most recent link first
          code: [action.code, ...state.code],
          short_link: [action.short_link, ...state.short_link],
          full_short_link: [action.full_short_link, ...state.full_short_link],
          short_link2: [action.short_link2, ...state.short_link2],
          full_short_link2: [action.full_short_link2, ...state.full_short_link2],
          share_link: [action.share_link, ...state.share_link],
          full_share_link: [action.full_share_link, ...state.full_share_link],
          original_link: [action.original_link, ...state.original_link]
        }
      // If action type does not match
      default:
        return state
    }
  }