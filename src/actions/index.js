export const OPEN_MODAL = 'MODAL_OPENED'
export const MODAL_CLOSED = 'MODAL_CLOSED'
export const UPDATE_SCORE = 'UPDATE_SCORE'

export const openModal = element => {
  element = element && element.tagName === 'TD' ? element.parentElement : element
  return {
    type: OPEN_MODAL,
    id: element.id
  }
}

export const updateScore = value => {
  return {
    type: UPDATE_SCORE,
    value
  }
}

export const closeModal = element => {
  return {
    type: MODAL_CLOSED
  }
}
