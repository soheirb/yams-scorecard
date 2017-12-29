import React from 'react'
import { shallow } from 'enzyme'
import ScoreCard from '../scoreCard'

it('renders without crashing with label and value', () => {
  const props = {
    score: {
      label: 'myLabel',
      value: 54,
      id: 'myId',
      crossed: false
    },
    onScoreSelect: jest.fn()
  }
  const wrapper = shallow(<ScoreCard {...props} />)
  expect(wrapper.find('dt').text()).toEqual(props.score.label)
  expect(parseInt(wrapper.find('dd').text(), 10)).toEqual(props.score.value)
})

it('should render an empty value if value = 0', () => {
  const props = {
    score: {
      label: 'myLabel',
      value: 0,
      id: 'myId',
      crossed: false
    },
    onScoreSelect: jest.fn()
  }
  const wrapper = shallow(<ScoreCard {...props} />)
  expect(wrapper.find('dd').text()).toEqual('')
})

it('should render --- in value if crossed', () => {
  const props = {
    score: {
      label: 'myLabel',
      value: 0,
      id: 'myId',
      crossed: true
    },
    onScoreSelect: jest.fn()
  }
  const wrapper = shallow(<ScoreCard {...props} />)

  expect(wrapper.find('dd > b').text()).toEqual('\u2014')
})

it('should call OnSelectScore with id when clicked', () => {
  const props = {
    score: {
      label: 'myLabel',
      value: 0,
      id: 'myId',
      crossed: true
    },
    onScoreSelect: jest.fn()
  }
  const wrapper = shallow(<ScoreCard {...props} />)
  const button = wrapper.find('button')

  button.props().onClick(button.props())

  expect(props.onScoreSelect.mock.calls.length).toEqual(1)
  expect(props.onScoreSelect.mock.calls[0][0].id).toEqual(props.score.id)
})
