import { save } from './services'

export const saveToLocalStorage = store => next => action => {
  let result = next(action)
  const newState = store.getState()
  save('games', newState.games)
  return result
}
