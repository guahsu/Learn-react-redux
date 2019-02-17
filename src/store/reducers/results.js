import * as actionTypes from '../actions/actionTypes'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      const updatedValue = action.result * 2
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: updatedValue
        })
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(result => result.id !== action.resultId)
      return {
        ...state,
        results: updatedArray
      }
    default:
      return state
  }
}

export default reducer
