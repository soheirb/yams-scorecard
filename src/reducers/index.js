import * as actions from '../actions'

const getScore = (yams, id) => {
  return yams.find(score => score.id === id)
}

const updateScore = (yams, id, value) => {
  return yams.map(score => {
    if (score.id !== id) return score
    return {
      ...score,
      value: parseInt(value, 10)
    }
  })
}

const updateSelectedScore = (score, value) => {
  return {
    ...score,
    value: parseInt(value, 10)
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.MODAL_OPENED:
      return {
        ...state,
        displayModal: true,
        selectedScore: getScore(state.yams, action.id)
      }
    case actions.MODAL_CLOSED:
      return {
        ...state,
        displayModal: false
      }
    case actions.UPDATE_SCORE:
      return {
        ...state,
        selectedScore: updateSelectedScore(
          state.selectedScore,
          action.value
        ),
        yams: updateScore(
          state.yams,
          state.selectedScore.id,
          action.value
        )
      }
    default:
      return state
  }
}

export default reducer
