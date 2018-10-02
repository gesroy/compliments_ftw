import { load } from './services'
import ACTIONS from './actions'

const initialState = {
  compliments: load('compliments') || [],
}

export default function reducer(state = initialState, action = {}) {
  let index
  switch (action.type) {
  case ACTIONS.REPLACE_COMPLIMENTS:
    return {
      ...state,
      compliments: action.payload.compliments,
    }

  case ACTIONS.SAVE_TEMP_COMPLIMENT_TEXT:
    return {
      ...state,
      tempCompliment: action.payload.tempCompliment,
    }

  case ACTIONS.SAVE_IN_REVIEW_TEXT:
    return {
      ...state,
      inReviewText: action.payload.inReviewText,
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
    return {
      ...state,
      compliments: [...state.compliments, { text: state.inReviewText }],
      complimentsToReview: [
        ...state.complimentsToReview.slice(0, index),
        ...state.complimentsToReview.slice(index + 1),
      ],
      inReviewText: null,
    }

  default:
    return state
  }
}
