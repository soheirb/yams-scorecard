import { BONUS, getBonusValue, getTotals } from './index'

describe('getBonusValue', () => {
  it('should return a the bonus value if score is more or equal than 63', () => {
    expect(getBonusValue(0)).toEqual(0)
    expect(getBonusValue(61)).toEqual(0)
    expect(getBonusValue(63)).toEqual(BONUS)
    expect(getBonusValue(70)).toEqual(BONUS)
  })
})

describe('getTotals', () => {
  it('should return all the total', () => {
    const state = {
      scoreCards: {
        identical: [{value: 20}, {value: 45}],
        combined: [{value: 7}, {value: 10}]
      }
    }
    expect(getTotals(state)).toEqual({
      identicalSubTotal: 65,
      bonus: BONUS,
      identicalTotal: 65 + BONUS,
      combinedTotal: 17,
      gameTotal: 82 + BONUS
    })
  })
})
