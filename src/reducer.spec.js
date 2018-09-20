import reducer from './reducer'
import ACTIONS from './actions'

describe('reducer', () => {
  it('always returns a state', () => {
    const state = {
      compliments: [{ foo: 'bar' }],
    }
    expect(reducer(state, { type: 'foo' })).toBe(state)
    expect(reducer(state, {})).toBe(state)
    expect(reducer(state, { type: 'foo' })).toBe(state)
  })
  describe(ACTIONS.ADD_COMPLIMENT_TEXT, () => {
    it('creates a new compliment', () => {
      const state = {
        compliments: [],
      }
      const action = {
        type: ACTIONS.ADD_COMPLIMENT_TEXT,
        payload: {
          text: 'Dein Lachen ist wie der Aufgang der Sonne.',
        },
      }
      expect(reducer(state, action)).toEqual({
        compliments: [
          {
            text: 'Dein Lachen ist wie der Aufgang der Sonne.',
          },
        ],
      })
    })
  })
})
