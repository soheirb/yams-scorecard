import * as actions from '../actions'
import * as utils from './utils'

export const initialState = {
  selectedScore: null,
  displayModal: false,
  scoreCards: {
    identical: [
      {id: 'theAces', label: 'Les As', value: 0, minValue: 1, maxValue: 5, crossed: false},
      {id: 'the2', label: 'Les Deux', value: 0, minValue: 2, maxValue: 10, crossed: false},
      {id: 'the3', label: 'Les Trois', value: 0, minValue: 3, maxValue: 15, crossed: false},
      {id: 'the4', label: 'Les Quatre', value: 0, minValue: 4, maxValue: 20, crossed: false},
      {id: 'the5', label: 'Les Cinq', value: 0, minValue: 5, maxValue: 25, crossed: false},
      {id: 'the6', label: 'Les Six', value: 0, minValue: 6, maxValue: 30, crossed: false}],
    combined: [
      {id: 'chance', type: 'combined', label: 'Chance', value: 0, crossed: false},
      {id: 'brelan', type: 'combined', label: 'Brelan', value: 0, crossed: false},
      {id: 'ptSuite', type: 'combined', label: 'Petite Suite', price: 15, value: 0, crossed: false},
      {id: 'gdSuite', type: 'combined', label: 'Grande Suite', price: 30, value: 0, crossed: false},
      {id: 'full', type: 'combined', label: 'Full', price: 25, value: 0, crossed: false},
      {id: 'carre', type: 'combined', label: 'Carré', value: 0, crossed: false},
      {id: 'yams', type: 'combined', label: 'Yams', price: 50, value: 0, crossed: false}
    ]
  }
}

export default (state = initialState, action) => {
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
