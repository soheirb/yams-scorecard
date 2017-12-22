import * as actions from '../actions'

const getScore = (yams, id) => {
  return yams.find(score => score.id === id)
}

const getUpdatedScore = (score, value) => {
  return {
    ...score,
    value: parseInt(value, 10)
  }
}

const updateScore = (yams, id, value) => {  
  return yams.map(score => {
    if (score.id !== id) return score
    return getUpdatedScore(score, value)
  })
}

const updateSelectedScore = (score, value) => {
  return {
    ...score,
    value: parseInt(value, 10)
  }
}
const getSubTotals = (yams) => {
  return yams.filter(score => score.type === 'identical')
    .reduce((subTotal, score) => {
      return subTotal + score.value
    }, 0)
}

const updateTotals = (yams) => {
  return yams.map(score => {
    if (score.id !== 'subTotal') return score
    return {
      ...score,
      value: getSubTotals(yams)
    }
  })
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
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
      let yams = updateScore(
        state.yams,
        state.selectedScore.id,
        action.value
      )
      return {
        ...state,
        selectedScore: updateSelectedScore(
          state.selectedScore,
          action.value
        ),
        yams: updateTotals(yams)
      }
    default:
      return state
  }
}

export default reducer
