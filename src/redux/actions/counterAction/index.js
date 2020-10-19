import { DECREMENT, INCREMENT } from '../../actionsTypes/counterActionTypes'

export const incrementCounter = () => {
  return { type: INCREMENT }
}

export const decrementCounter = () => {
  return { type: DECREMENT }
}
