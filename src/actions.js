/*eslint no-unused-vars: 0*/
import { createAction } from 'redux-actions'
import {
  loadCompliments,
  loadComplimentsToReview,
  saveComplimentOnServer,
  saveComplimentToReviewOnServer,
} from './services'

const ACTIONS = {
  SAVE_TEMP_COMPLIMENT_TEXT: 'SAVE_TEMP_COMPLIMENT_TEXT',
  SAVE_COMPLIMENT_TEXT: 'SAVE_COMPLIMENT_TEXT',
  SAVE_COMPLIMENT_TO_REVIEW: 'SAVE_COMPLIMENT_TO_REVIEW',
  SAVE_IN_REVIEW_TEXT: 'SAVE_IN_REVIEW_TEXT',
  REPLACE_COMPLIMENTS: 'REPLACE_COMPLIMENTS',
  REPLACE_COMPLIMENTS_TO_REVIEW: 'REPLACE_COMPLIMENTS_TO_REVIEW',
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
export const replaceComplimentsToReview = createAction(
  ACTIONS.REPLACE_COMPLIMENTS_TO_REVIEW
)

export const loadComplimentsFromServer = () => dispatch => {
  loadCompliments().then(compliments => {
    dispatch(replaceCompliments({ compliments }))
  })
}

export const loadComplimentsToReviewFromServer = () => dispatch => {
  loadComplimentsToReview().then(complimentsToReview => {
    dispatch(replaceComplimentsToReview({ complimentsToReview }))
  })
}

export const postComplimentToServer = text => dispatch => {
  saveComplimentOnServer(text).then(result => {
    dispatch(loadComplimentsFromServer())
  })
}

export const postComplimentToReviewToServer = text => dispatch => {
  saveComplimentToReviewOnServer(text).then(result => {
    dispatch(loadComplimentsToReviewFromServer())
  })
}

export default ACTIONS
