import * as actions from './index'

it('should return the OPEN_MODAL action', () => {
  const id = 'myId'
  const type = 'myType'
  const action = {
    type: actions.OPEN_MODAL,
    data: { id, type }
  }

  expect(actions.openModal({ id }, type)).toEqual(action)
})

it('should return the UPDATE_SCORE action', () => {
  const value = 0
  const action = {
    type: actions.UPDATE_SCORE,
    value
  }

  expect(actions.updateScore(value)).toEqual(action)
})

it('should return the RESET_SCORE action', () => {
  const action = {
    type: actions.RESET_SCORE
  }

  expect(actions.resetScore()).toEqual(action)
})

it('should return the CROSS_SCORE action', () => {
  const action = {
    type: actions.CROSS_SCORE
  }

  expect(actions.crossScore()).toEqual(action)
})

it('should return the MODAL_CLOSED action', () => {
  const action = {
    type: actions.MODAL_CLOSED
  }

  expect(actions.closeModal()).toEqual(action)
})
