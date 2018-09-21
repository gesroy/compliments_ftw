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
  case ACTIONS.SAVE_TEMP_COMPLIMENT_TEXT:
    return {
      ...state,
      tempCompliment: action.payload.tempCompliment,
    }

  case ACTIONS.SAVE_COMPLIMENT_TEXT:
    return {
      ...state,
      compliments: [...state.compliments, { text: state.tempCompliment }],
      tempCompliment: null,
    }

  default:
    return state
  }
}
