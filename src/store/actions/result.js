import * as actionTypes from './actionTypes'

export const saveResult = result => {
  return {
    type: actionTypes.STORE_RESULT,
    result
  }
}

export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().reducerReducer.counter
      console.log(oldCounter)
      dispatch(saveResult(result))
    }, 2000)
  }
}

export const deleteResult = (resultId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultId
  }
}
