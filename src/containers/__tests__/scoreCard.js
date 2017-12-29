import React from 'react'
import { createMockStore } from 'redux-test-utils'
import { shallowWithStore } from 'enzyme-redux'
import ScoreCard from '../scoreCard'
import { openModal } from '../../actions'

it('should render without crashing with props', () => {
  const props = {
    score: {
      label: 'myLabel',
      value: 54,
      id: 'myId',
      crossed: false
    },
    type: 'myType'
  }
  const store = createMockStore({})
  const wrapper = shallowWithStore(<ScoreCard {...props} />, store)

  expect(wrapper.props().score).toEqual(props.score)
  expect(wrapper.props().type).toEqual(props.type)
})

it('should dispatch the action got from openModal', () => {
  const props = {
    score: {
      label: 'myLabel',
      value: 54,
      id: 'myId',
      crossed: false
    },
    type: 'myType'
  }
  const store = createMockStore({})
  const wrapper = shallowWithStore(<ScoreCard {...props} />, store)
  const event = {currentTarget: { id: props.id }}

  wrapper.props().onScoreSelect(event)
  expect(store.isActionDispatched(openModal(event.currentTarget, props.type))).toBe(true)
})
