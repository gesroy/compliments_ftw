import { createAction } from 'redux-actions'
import { loadCompliments } from './services'

const ACTIONS = {
  SAVE_TEMP_COMPLIMENT_TEXT: 'SAVE_TEMP_COMPLIMENT_TEXT',
  SAVE_COMPLIMENT_TEXT: 'SAVE_COMPLIMENT_TEXT',
  SAVE_COMPLIMENT_TO_REVIEW: 'SAVE_COMPLIMENT_TO_REVIEW',
  SAVE_IN_REVIEW_TEXT: 'SAVE_IN_REVIEW_TEXT',
  REPLACE_COMPLIMENTS: 'REPLACE_COMPLIMENTS',
}

export const saveTempComplimentText = createAction(
  ACTIONS.SAVE_TEMP_COMPLIMENT_TEXT
)
export const saveComplimentText = createAction(ACTIONS.SAVE_COMPLIMENT_TEXT)
export const saveComplimentToReview = createAction(
  ACTIONS.SAVE_COMPLIMENT_TO_REVIEW
)
export const saveInReviewText = createAction(ACTIONS.SAVE_IN_REVIEW_TEXT)
export const replaceCompliments = createAction(ACTIONS.REPLACE_COMPLIMENTS)

export const loadComplimentsFromServer = () => dispatch => {
  loadCompliments().then(compliments => {
    dispatch(replaceCompliments({ compliments }))
  })
}

export default ACTIONS
