import { save } from './services'

export const saveToLocalStorage = store => next => action => {
  if (typeof action === 'object') {
    let result = next(action)
    const newState = store.getState()
    save('compliments', newState.compliments)
    return result
  } else {
    return next(action)
  }
}
