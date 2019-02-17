import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      const updatedValue = action.result * 2
      const updatedResult = state.results.concat({
        id: new Date(),
        value: updatedValue
      })
      return updateObject(state, { results: updatedResult })
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(result => result.id !== action.resultId)
      return updateObject(state, { results: updatedArray })
    default:
      return state
  }
}

export default reducer
