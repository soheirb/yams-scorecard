import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { createMockStore } from 'redux-test-utils'
import { shallowWithStore } from 'enzyme-redux'
import ConnectedApp, { App } from './App'
import store from './store'
import { Provider } from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>, div)
})

it('should render the modal component and scorecards', () => {
  const props = {
    scoreCards: {
      identical: [{ id: 'A' }, { id: 'B' }],
      combined: [{ id: 'C' }, { id: 'D' }]
    },
    totals: { },
    displayModal: true
  }

  const wrapper = shallow(<App {...props} />)
  expect(wrapper.find('Connect(Modal)').length).toEqual(1)
  expect(wrapper.find('Connect(ScoreCard)').length).toEqual(4)
})

it('should set correctly the props', () => {
  const state = {
    scoreCards: {
      identical: [{ id: 'A' }, { id: 'B' }],
      combined: [{ id: 'C' }, { id: 'D' }]
    },
    displayModal: true,
    totals: {}
  }
  const store = createMockStore(state)
  const wrapper = shallowWithStore(<ConnectedApp />, store)

  expect(wrapper.props().scoreCards).toEqual(state.scoreCards)
  expect(wrapper.props().displayModal).toEqual(state.displayModal)
  expect(wrapper.props().totals).toBeDefined()
})
