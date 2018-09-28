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
  describe(ACTIONS.SAVE_IN_REVIEW_TEXT, () => {
    it('saves a compliment while it is edited in review', () => {
      const state = { compliments: [] }
      const action = {
        type: ACTIONS.SAVE_IN_REVIEW_TEXT,
        payload: { inReviewText: 'You just meda mz day.' },
      }
      expect(reducer(state, action)).toEqual({
        compliments: [],
        inReviewText: 'You just meda mz day.',
      })
    })
  })
  describe(ACTIONS.SAVE_COMPLIMENT_TO_REVIEW, () => {
    it('saves a temp compliment in review', () => {
      const state = {
        compliments: [],
        complimentsToReview: [],
        tempCompliment: 'You just meda mz day.',
      }
      const action = {
        type: ACTIONS.SAVE_COMPLIMENT_TO_REVIEW,
        payload: {},
      }
      expect(reducer(state, action)).toEqual({
        compliments: [],
        complimentsToReview: [{ text: 'You just meda mz day.' }],
        tempCompliment: null,
      })
    })
  })
  describe(ACTIONS.SAVE_COMPLIMENT_TEXT, () => {
    it('saves a temp compliment to compliments', () => {
      const state = {
        compliments: [],
        complimentsToReview: [
          { text: 'Kompliment mit Index null.' },
          { text: 'Kompliment mit Index eins.' },
          { text: 'Kompliment mit Index zwei.' },
          { text: 'Kompliment mit Index drei' },
        ],
        inReviewText: 'Dein Lachen ist wie der Aufgang der Sonne.',
      }
      const action = {
        type: ACTIONS.SAVE_COMPLIMENT_TEXT,
        payload: { index: 1 },
      }
      expect(reducer(state, action)).toEqual({
        compliments: [{ text: 'Dein Lachen ist wie der Aufgang der Sonne.' }],
        complimentsToReview: [
          { text: 'Kompliment mit Index null.' },
          { text: 'Kompliment mit Index zwei.' },
          { text: 'Kompliment mit Index drei' },
        ],
        inReviewText: null,
      })
    })
  })
})
