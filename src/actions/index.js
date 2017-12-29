export const OPEN_MODAL = 'MODAL_OPENED'
export const MODAL_CLOSED = 'MODAL_CLOSED'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const RESET_SCORE = 'RESET_SCORE'
export const CROSS_SCORE = 'CROSS_SCORE'

export const openModal = ({ id }, type) => {
  return {
    type: OPEN_MODAL,
    data: {
      id,
      type
    }
  }
}

export const updateScore = value => {
  return {
    type: UPDATE_SCORE,
    value
  }
}

export const resetScore = () => {
  return {
    type: RESET_SCORE
  }
}

export const crossScore = () => {
  return {
    type: CROSS_SCORE
  }
}

export const closeModal = element => {
  return {
    type: MODAL_CLOSED
  }
}
