import { load } from './services'
import ACTIONS from './actions'

const initialState = {
  compliments: load('compliments') || [
    { text: 'Das hast du toll gemacht. Danke.' },
    { text: 'Du bist wunderbar.' },
  ],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.ADD_COMPLIMENTTEXT:
      return {
        ...state,
        compliments: [...state.compliments, { text: action.payload.text }],
      }
  }
  return state
}
