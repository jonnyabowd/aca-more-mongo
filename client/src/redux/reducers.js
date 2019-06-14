import { combineReducers } from 'redux'

const movies = (state = [], action) => {
  // state = movies
  let newState = [ ...state ]
  switch (action.type) {
    case 'LIST_MOVIES':
      return action.value
    case 'CREATE_MOVIE':
      newState.push(action.value)
      return newState
    case 'DELETE_MOVIE':
      const index = newState.findIndex(m => m.movieName === action.value)
      index > -1 && newState.splice(index, 1)
      return newState
    default:
      return state
  }
}

export default combineReducers({
  movies
})