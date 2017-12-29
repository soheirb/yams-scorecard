import * as util from './index'

const getScore = (scoreList, id) => scoreList.find(score => score.id === id)

describe('findScore', () => {
  it('should find score by id', () => {
    const scoreList = [{ id: 'A' }, { id: 'B' }, { id: 'C' }]
    expect(util.findScore(scoreList, 'B').id).toEqual('B')
    expect(util.findScore(scoreList, 'X')).toBeUndefined()
    expect(util.findScore(scoreList, undefined)).toBeUndefined()
    expect(util.findScore(undefined, undefined)).toBeUndefined()
  })
})

describe('getScore', () => {
  it('should return the score by id and type', () => {
    const scoreCards = {
      typeA: [{ id: 'A' }, { id: 'B' }, { id: 'C' }],
      typeB: [{ id: 'D' }, { id: 'E' }, { id: 'F' }]
    }
    expect(util.getScore(scoreCards, { id: 'E', type: 'typeB' }).id).toEqual('E')
    expect(util.getScore(scoreCards, { id: 'X', type: 'typeB' })).toEqual({ type: 'typeB' })
    expect(util.getScore(scoreCards, { id: 'X', type: 'typeX' })).toEqual({ type: 'typeX' })
  })
})

describe('getCleanValue', () => {
  it('should return the score by id and type', () => {
    expect(util.getCleanValue('25')).toEqual(25)
    expect(util.getCleanValue('A')).toEqual(0)
    expect(util.getCleanValue(undefined)).toEqual(0)
  })
})

describe('getUpdatedScores', () => {
  it('should update and parseInt the value of score in list', () => {
    const scoreList = [{ id: 'A', value: 0 }, { id: 'B', value: 0 }, { id: 'C', value: 0 }]
    const result = util.getUpdatedScores(scoreList, { id: 'B', value: '5', crossed: false })
    expect(getScore(result, 'B').value).toEqual(5)
    expect(getScore(result, 'B').crossed).toBe(false)
    expect(getScore(result, 'A').value).toEqual(0)
    expect(getScore(result, 'A').crossed).toBeUndefined()
  })
  it('should set the value to 0 and flag crossed if crossed', () => {
    const scoreList = [{ id: 'A', value: 0 }, { id: 'B', value: 0 }, { id: 'C', value: 3 }]
    const result = util.getUpdatedScores(scoreList, { id: 'B', value: 5, crossed: true })
    expect(getScore(result, 'B').value).toEqual(0)
    expect(getScore(result, 'B').crossed).toBe(true)
    expect(getScore(result, 'C').value).toEqual(3)
    expect(getScore(result, 'C').crossed).toBeUndefined()
  })
})

describe('updateScores', () => {
  it('should update scoreCards from the selected one', () => {
    const scoreCards = {
      identical: [{ id: 'A' }, { id: 'B' }, { id: 'C' }],
      combined: [{ id: 'D' }, { id: 'E', value: 10 }, { id: 'F' }]
    }
    const result = util.updateScores(scoreCards, { id: 'E', type: 'combined', value: '25' })
    expect(getScore(result.combined, 'E').value).toEqual(25)
  })
})

describe('updateSelectedScore', () => {
  it('should update the value of the passed score if no price', () => {
    const score = { id: 'A', value: 0 }
    expect(util.updateSelectedScore(score, '25')).toEqual({ id: 'A', value: 25 })
  })
  it('should update the value of the passed score with the price if price', () => {
    const score = { id: 'A', value: 0, price: 15 }
    expect(util.updateSelectedScore(score, 25)).toEqual({ id: 'A', value: 15, price: 15 })
  })
})

describe('resetSelectedScore', () => {
  it('should set the value of the passed score to 0', () => {
    const score = { id: 'A', value: 35 }
    expect(util.resetSelectedScore(score)).toEqual({ id: 'A', value: 0 })
  })
})

describe('crossSelectedScore', () => {
  it('should set crossed of the passed score to false', () => {
    const score = { id: 'A', crossed: true }
    expect(util.crossSelectedScore(score)).toEqual({ id: 'A', crossed: false })
  })
  it('should set crossed of the passed score to true', () => {
    const score = { id: 'A', crossed: false }
    expect(util.crossSelectedScore(score)).toEqual({ id: 'A', crossed: true })
  })
})
