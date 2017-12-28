import * as actions from '../actions'
import * as utils from './utils'

export const getTotals = (state) => {
  const { identical, combined } = state.scoreCards
  const identicalSubTotal = identical.reduce((total, score) => total + score.value, 0)
  const bonus = utils.getBonusValue(identicalSubTotal)
  const combinedTotal = combined.reduce((total, score) => total + score.value, 0)

  return {
    identicalSubTotal: identicalSubTotal,
    bonus: bonus,
    identicalTotal: identicalSubTotal + bonus,
    combinedTotal: combinedTotal,
    gameTotal: identicalSubTotal + bonus + combinedTotal
  }
}

export default (state, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
      return {
        ...state,
        displayModal: true,
        selectedScore: utils.getScore(state.scoreCards, action.data)
      }
    case actions.MODAL_CLOSED:
      return {
        ...state,
        displayModal: false,
        scoreCards: {
          ...utils.updateScores(
            state.scoreCards,
            state.selectedScore
          )
        }
      }
    case actions.UPDATE_SCORE:
      return {
        ...state,
        selectedScore: utils.updateSelectedScore(
          state.selectedScore,
          action.value
        )
      }
    case actions.RESET_SCORE:
      return {
        ...state,
        selectedScore: utils.resetSelectedScore(
          state.selectedScore
        )
      }
    case actions.CROSS_SCORE:
      return {
        ...state,
        selectedScore: utils.crossSelectedScore(
          state.selectedScore
        )
      }
    default:
      return state
  }
}
