import reducer from './reducer'
import ACTIONS from './actions'

describe('reducer', () => {
  it('always returns a state', () => {
    const state = {
      players: [{ foo: 'bar' }],
    }
    expect(reducer(state, { type: 'foo' })).toBe(state)
    expect(reducer(state, {})).toBe(state)
    expect(reducer(state, { type: 'foo' })).toBe(state)
  })
  describe(ACTIONS.SAVE_ROUND, () => {
    it('save gained pointes from one round for all users', () => {
      const state = {
        players: [
          { name: 'Paul', scores: [10], roundScore: 2 },
          { name: 'Laura', scores: [49], roundScore: 3 },
          { name: 'Mia', scores: [172], roundScore: 11 },
        ],
      }
      const action = {
        type: ACTIONS.SAVE_ROUND,
      }
      expect(reducer(state, action)).toEqual({
        players: [
          { name: 'Paul', scores: [10, 2], roundScore: 0 },
          { name: 'Laura', scores: [49, 3], roundScore: 0 },
          { name: 'Mia', scores: [172, 11], roundScore: 0 },
        ],
      })
    })
  })

  describe(ACTIONS.DELETE_PLAYER, () => {
    it('delete a single player', () => {
      const state = {
        players: [
          { name: 'Paul', scores: [10], roundScore: 2 },
          { name: 'Laura', scores: [49], roundScore: 3 },
        ],
      }
      const action = {
        type: ACTIONS.DELETE_PLAYER,
        payload: {
          index: 1,
        },
      }
      const newState = reducer(state, action)
      expect(reducer(state, action)).toEqual({
        players: [{ name: 'Paul', scores: [10], roundScore: 2 }],
      })
      expect(newState).not.toBe(state)
    })
  })

  describe(ACTIONS.ADD_PLAYER, () => {
    it('creates a player with a name', () => {
      const state = {
        players: [],
      }
      const action = {
        type: ACTIONS.ADD_PLAYER,
        payload: {
          name: 'Mia Iam',
        },
      }
      expect(reducer(state, action)).toEqual({
        players: [
          {
            name: 'Mia Iam',
            roundScore: 0,
            scores: [],
          },
        ],
      })
    })
  })

  describe(ACTIONS.RESET_SCORES, () => {
    it('resets all scores from all users', () => {
      const state = {
        players: [
          { name: 'Paul', roundScore: 10 },
          { name: 'Laura', roundScore: 49 },
        ],
      }
      const action = { type: ACTIONS.RESET_SCORES }
      const newState = reducer(state, action)
      expect(reducer(state, action)).toEqual({
        players: [
          { name: 'Paul', roundScore: 0 },
          { name: 'Laura', roundScore: 0 },
        ],
      })
      expect(newState).not.toBe(state)
    })
  })

  describe(ACTIONS.UPDATE_SCORE, () => {
    it('update all scores from all users', () => {
      const state = {
        players: [
          { name: 'Paul', scores: [10], roundScore: 3 },
          { name: 'Laura', scores: [49], roundScore: 7 },
        ],
      }
      const action = {
        type: ACTIONS.UPDATE_SCORE,
        payload: {
          index: 1,
          value: 5,
        },
      }
      expect(reducer(state, action)).toEqual({
        players: [
          { name: 'Paul', scores: [10], roundScore: 3 },
          { name: 'Laura', scores: [49], roundScore: 12 },
        ],
      })
    })
  })

  describe(ACTIONS.DELETE_ALL_PLAYERS, () => {
    it('makes the players an empty array', () => {
      const state = {
        players: [{ foo: 'bar' }, { baz: 'foobar' }],
      }

      const action = { type: ACTIONS.DELETE_ALL_PLAYERS }
      const newState = reducer(state, action)
      expect(reducer(state, action)).toEqual({
        players: [],
      })
      expect(newState).not.toBe(state)
    })
  })
})
