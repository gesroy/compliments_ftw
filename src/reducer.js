import { load } from './services'
import ACTIONS from './actions'

const initialState = {
  compliments: load('compliments') || [
    { text: 'Das hast du toll gemacht.' },
    { text: 'Du bist wunderbar.' },
    { text: 'Eine Liebe wie Deine kann die Welt verändern.' },
    { text: 'Ich hoffe, meine Kinder werden ein bisschen so wie du.' },
    { text: 'You just made my day.' },
    { text: 'Du hast einen tollen Humor.' },
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
