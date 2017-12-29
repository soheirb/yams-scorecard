export const findScore = (scoreList, id) => {
  return scoreList && scoreList.find(score => score.id === id)
}

export const getScore = (scoreCards, {id, type}) => {
  return {
    ...findScore(scoreCards[type], id),
    type
  }
}

export const getCleanValue = (value) => {
  return isNaN(parseInt(value, 10)) ? 0 : parseInt(value, 10)
}

export const getUpdatedScores = (scoreList, {id, value, crossed}) => {
  return scoreList && scoreList.map(score => {
    if (score.id !== id) return score
    return {
      ...score,
      crossed,
      value: crossed ? 0 : getCleanValue(value)
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
  return {
    ...score,
    value: score.price ? score.price : getCleanValue(value)
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
