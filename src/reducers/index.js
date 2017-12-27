import * as actions from '../actions'

const getScore = (scoreCards, id) => {
  return scoreCards.identical.find(score => score.id === id)
}

const getUpdatedScore = (score, value) => {
  return {
    ...score,
    value: parseInt(value, 10)
  }
}

const updateScores = (scoreCards, id, value) => {  
  return scoreCards.identical.map(score => {
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

const getBonusValue = (bonus, scoreValue) => {
  return scoreValue >= 63 ? bonus.bonus : 0
}

const updateTotals = (scoreCards, identicalScore) => {
  const identicalSubTotal = identicalScore.reduce((total, score) => total += score.value, 0)
  const bonus = getBonusValue(scoreCards.bonus, identicalSubTotal)
  return {
    identicalSubTotal: {
      ...scoreCards.identicalSubTotal,
      value: identicalSubTotal
    },
    bonus: {
      ...scoreCards.bonus,
      value: bonus
    },
    identicalTotal: {
      ...scoreCards.identicalTotal,
      value: identicalSubTotal + bonus
    }
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
      return {
        ...state,
        displayModal: true,
        selectedScore: getScore(state.scoreCards, action.id)
      }
    case actions.MODAL_CLOSED:
      return {
        ...state,
        displayModal: false
      }
    case actions.UPDATE_SCORE:
      let selectedScore = updateSelectedScore(
        state.selectedScore,
        action.value
      )      
      let identical = updateScores(
        state.scoreCards,
        state.selectedScore.id,
        action.value
      )
      let totals = updateTotals(state.scoreCards, identical)
      return {
        ...state,
        scoreCards: {
          identical: identical,
          ...totals
        },
        selectedScore: selectedScore
      }
    default:
      return state
  }
}

export default reducer
