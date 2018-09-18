import { createAction } from 'redux-actions'

const ACTIONS = {
  ADD_COMPLIMENTTEXT: 'ADD_COMPLIMENTTEXT',
}

export const addComplimentText = createAction(ACTIONS.ADD_COMPLIMENTTEXT)
/*export const loadComplimentTextsFromServer = () => dispatch => {
  fetch('http://localhost:3001/players')
    .then(res => res.json())
    .then(compliments => {
      dispatch(replaceCompliments({ compliments }))
    })
}*/

export default ACTIONS
