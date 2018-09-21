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
  describe(ACTIONS.SAVE_TEMP_COMPLIMENT_TEXT, () => {
    it('saves a temp compliment', () => {
      const state = {
        compliments: [],
      }
      const action = {
        type: ACTIONS.SAVE_TEMP_COMPLIMENT_TEXT,
        payload: {
          tempCompliment: 'Dein Lachen ist wie der Aufgang der Sonne.',
        },
      }
      expect(reducer(state, action)).toEqual({
        compliments: [],
        tempCompliment: 'Dein Lachen ist wie der Aufgang der Sonne.',
      })
    })
  })
  describe(ACTIONS.SAVE_COMPLIMENT_TEXT, () => {
    it('saves a temp compliment to compliments', () => {
      const state = {
        compliments: [],
        tempCompliment: 'Dein Lachen ist wie der Aufgang der Sonne.',
      }
      const action = {
        type: ACTIONS.SAVE_COMPLIMENT_TEXT,
        payload: {},
      }
      expect(reducer(state, action)).toEqual({
        compliments: [{ text: 'Dein Lachen ist wie der Aufgang der Sonne.' }],
        tempCompliment: null,
      })
    })
  })
})
