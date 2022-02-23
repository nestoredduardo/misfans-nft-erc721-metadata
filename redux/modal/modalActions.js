import { SHOW_MODAL, HIDE_MODAL } from './modalTypes'

const showModal = (name) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: name,
  })
}

const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
  })
}

export { showModal, hideModal }
