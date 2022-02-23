import { SHOW_MODAL, HIDE_MODAL } from './modalTypes'

const initialState = {
  show: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show: true }
    case HIDE_MODAL:
      return { ...state, show: false }
    default:
      return state
  }
}

export default reducer
