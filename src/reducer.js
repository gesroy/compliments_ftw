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
  case ACTIONS.ADD_COMPLIMENT_TEXT:
    return {
      ...state,
      compliments: [...state.compliments, { text: action.payload.text }],
    }

  case ACTIONS.SAVE_TEMP_COMPLIMENT:
    return {
      ...state,
      tempCompliment: action.payload.tempCompliment,
    }

  case ACTIONS.SAVE_COMPLIMENT:
    return {
      ...state,
      compliments: [...state.compliments, { text: state.tempCompliment }],
      tempCompliment: null,
    }

  default:
    return state
  }
}
