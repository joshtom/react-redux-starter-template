import LOADING from '../../actionsTypes/testActionsTypes'

export const stopLoading = () => {
  return dispatch => {
    dispatch({
      type: LOADING
    })
  }
}
