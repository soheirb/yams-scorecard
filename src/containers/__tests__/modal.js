import React from 'react'
import { createMockStore } from 'redux-test-utils'
import { shallowWithStore } from 'enzyme-redux'
import Modal from '../modal'
import { closeModal, updateScore, resetScore, crossScore } from '../../actions'

it('should render without crashing with props', () => {
  const state = {
    selectedScore: {}
  }
  const store = createMockStore(state)
  const wrapper = shallowWithStore(<Modal />, store)

  expect(wrapper.props().score).toEqual(state.selectedScore)
})

it('should dispatch the actions', () => {
  const state = {
    selectedScore: {}
  }
  const store = createMockStore(state)
  const wrapper = shallowWithStore(<Modal />, store)
  const event = {target: { value: '5' }}

  wrapper.props().onClose()
  expect(store.isActionDispatched(closeModal())).toBe(true)

  wrapper.props().onScoreChange(event)
  expect(store.isActionDispatched(updateScore(event.target.value))).toBe(true)

  wrapper.props().onValidate(event)
  expect(store.isActionDispatched(updateScore(event.target.value))).toBe(true)

  wrapper.props().onReset()
  expect(store.isActionDispatched(resetScore())).toBe(true)

  wrapper.props().onCross()
  expect(store.isActionDispatched(crossScore())).toBe(true)
})
