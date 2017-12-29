import { createSelector } from 'reselect'

export const BONUS = 30
export const getBonusValue = (scoreValue) => {
  return scoreValue >= 63 ? BONUS : 0
}

const getIdenticalCards = state => state.scoreCards.identical
const getCombinedCards = state => state.scoreCards.combined

export const getTotals = createSelector(
  [getIdenticalCards, getCombinedCards],
  (identical, combined) => {
    const identicalSubTotal = identical.reduce((total, score) => total + score.value, 0)
    const bonus = getBonusValue(identicalSubTotal)
    const combinedTotal = combined.reduce((total, score) => total + score.value, 0)

    return {
      identicalSubTotal: identicalSubTotal,
      bonus: bonus,
      identicalTotal: identicalSubTotal + bonus,
      combinedTotal: combinedTotal,
      gameTotal: identicalSubTotal + bonus + combinedTotal
    }
  }
)
