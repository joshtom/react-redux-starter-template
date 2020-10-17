import { DECREMENT, INCREMENT } from '../../actionsTypes/counterActionTypes'

const initialState = {
  counter: 0
}

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}
