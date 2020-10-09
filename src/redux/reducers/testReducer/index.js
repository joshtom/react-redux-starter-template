import LOADING from '../../actionsTypes/testActionsTypes'

const initialState = {
  loading: true
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return {
	...state,
	loading: false,
      }
    default:
      return state
  }
    
}
