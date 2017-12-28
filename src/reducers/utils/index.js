const BONUS = 30

const findScore = (scoreList, id) => {
  return scoreList.find(score => score.id === id)
}

export const getScore = (scoreCards, {id, type}) => {
  return {
    ...findScore(scoreCards[type], id),
    type
  }
}

const getUpdatedScores = (scoreList, {id, value, crossed}) => {
  return scoreList.map(score => {
    if (score.id !== id) return score
    return {
      ...score,
      crossed,
      value: crossed ? 0 : parseInt(value, 10)
    }
  })
}

export const updateScores = (scoreCards, selectedScore) => {
  return {
    identical: selectedScore.type === 'identical'
      ? getUpdatedScores(scoreCards.identical, selectedScore)
      : scoreCards.identical,
    combined: selectedScore.type === 'combined'
      ? getUpdatedScores(scoreCards.combined, selectedScore)
      : scoreCards.combined
  }
}

export const updateSelectedScore = (score, value) => {
  let parsedValue = parseInt(value, 10)
  if (isNaN(parsedValue)) {
    parsedValue = 0
  }
  return {
    ...score,
    value: score.price ? score.price : parsedValue
  }
}

export const resetSelectedScore = score => {
  return {
    ...score,
    value: 0
  }
}

export const crossSelectedScore = score => {
  return {
    ...score,
    crossed: !score.crossed
  }
}

export const getBonusValue = (scoreValue) => {
  return scoreValue >= 63 ? BONUS : 0
}
