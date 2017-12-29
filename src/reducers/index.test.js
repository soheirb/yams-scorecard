import * as actions from '../actions'
import reducer, { initialState } from './index'

const getScore = (scoreCards, id, type) => scoreCards[type].find(score => score.id === id)

it('should return the inital state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('should set the modal state to true and update selected score', () => {
  const type = 'identical'
  const id = 'the2'
  const action = {
    type: actions.OPEN_MODAL,
    data: {id, type}
  }
  const newState = reducer(initialState, action)
  expect(newState.displayModal).toBe(true)
  expect(newState.selectedScore).toEqual({
    ...getScore(initialState.scoreCards, id, type),
    type
  })
})

it('should set the modal state to false and update scoreCard', () => {
  const id = 'the2'
  const type = 'identical'
  const value = 25
  const selectedScore = {id, type, value}
  const state = {...initialState, selectedScore}
  const action = {
    type: actions.MODAL_CLOSED
  }
  const newState = reducer(state, action)

  expect(newState.displayModal).toBe(false)
  expect(getScore(newState.scoreCards, id, type).value).toEqual(value)
})

it('should update the selected Score', () => {
  const id = 'the2'
  const type = 'identical'
  const firstValue = 10
  const secondValue = 25
  const selectedScore = {id, type, firstValue}
  const state = {...initialState, selectedScore}
  const action = {
    type: actions.UPDATE_SCORE,
    value: secondValue
  }
  const newState = reducer(state, action)

  expect(newState.selectedScore.value).toEqual(secondValue)
})

it('should reset the selected Score', () => {
  const value = 10
  const selectedScore = { value }
  const state = {...initialState, selectedScore}
  const action = {
    type: actions.RESET_SCORE
  }
  const newState = reducer(state, action)

  expect(newState.selectedScore.value).toEqual(0)
})

it('should reset the selected Score', () => {
  const crossed = false
  const selectedScore = { crossed }
  const state = {...initialState, selectedScore}
  const action = {
    type: actions.CROSS_SCORE
  }
  const newState = reducer(state, action)

  expect(newState.selectedScore.crossed).toBe(true)
})
