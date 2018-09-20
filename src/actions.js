import { createAction } from 'redux-actions'

const ACTIONS = {
  ADD_COMPLIMENT_TEXT: 'ADD_COMPLIMENT_TEXT',
  SAVE_TEMP_COMPLIMENT: 'SAVE_TEMP_COMPLIMENT',
  SAVE_COMPLIMENT: 'SAVE_COMPLIMENT',
}

export const addComplimentText = createAction(ACTIONS.ADD_COMPLIMENT_TEXT)
export const saveTempCompliment = createAction(ACTIONS.SAVE_TEMP_COMPLIMENT)
export const saveCompliment = createAction(ACTIONS.SAVE_COMPLIMENT)

export default ACTIONS
