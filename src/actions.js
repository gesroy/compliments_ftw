import { createAction } from 'redux-actions'

const ACTIONS = {
  SAVE_TEMP_COMPLIMENT_TEXT: 'SAVE_TEMP_COMPLIMENT_TEXT',
  SAVE_COMPLIMENT_TEXT: 'SAVE_COMPLIMENT_TEXT',
}

export const saveTempComplimentText = createAction(
  ACTIONS.SAVE_TEMP_COMPLIMENT_TEXT
)
export const saveComplimentText = createAction(ACTIONS.SAVE_COMPLIMENT_TEXT)

export default ACTIONS
