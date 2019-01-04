import { TOGGLE_CHECKED_VISIBILITY } from '../actions'

const init = true

export default (state = init, action) => {
  switch (action.type) {
    case TOGGLE_CHECKED_VISIBILITY:
      return !state
    default:
      return state
  }
}
