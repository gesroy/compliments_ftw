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
  complimentsToReview: [
    { text: 'Prboier das sua.' },
    { text: 'Noch ein Test-text yum Testen.' },
  ],
}

export default function reducer(state = initialState, action = {}) {
  let index, compliment
  switch (action.type) {
  case ACTIONS.SAVE_TEMP_COMPLIMENT_TEXT:
    return {
      ...state,
      tempCompliment: action.payload.tempCompliment,
    }

  case ACTIONS.SAVE_COMPLIMENT_TO_REVIEW:
    return {
      ...state,
      complimentsToReview: [
        ...state.complimentsToReview,
        { text: state.tempCompliment },
      ],
      tempCompliment: null,
    }

  case ACTIONS.SAVE_COMPLIMENT_TEXT:
    index = action.payload.index
    compliment = action.payload.compliment
    return {
      ...state,
      compliments: [...state.compliments, { text: compliment }],
      complimentsToReview: [
        ...state.complimentsToReview.slice(0, index),
        ...state.complimentsToReview.slice(index + 1),
      ],
    }

  default:
    return state
  }
}
