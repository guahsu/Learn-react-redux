import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  results: []
}

const storeResult = (state, action) => {
  const updatedValue = action.result * 2
  const updatedResult = state.results.concat({
    id: new Date(),
    value: updatedValue
  })
  return updateObject(state, { results: updatedResult })
}

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.resultId)
  return updateObject(state, { results: updatedArray })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return storeResult(state, action)
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action)
    default:
      return state
  }
}

export default reducer
