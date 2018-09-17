/*import ACTIONS from './actions'
import { load } from './services'

const initialState = {
  currentGameIndex: 0,
  games: load('games') || [
    {
      players: [{ name: null, scores: [], roundScore: 0 }],
      gameTitle: null,
    },
  ],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case ACTIONS.REPLACE_PLAYERS:
    return {
      ...state,
      games: [
        ...state.games.slice(0, state.currentGameIndex),
        {
          players: [
            ...state.games[state.currentGameIndex].players,
            { players: action.payload.players },
          ],
          gameTitle: state.games[state.currentGameIndex].gameTitle,
        },
        ...state.games.slice(state.currentGameIndex + 1),
      ],
    }
    }
  default:
    return state
}*/
