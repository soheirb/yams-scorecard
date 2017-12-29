import React from 'react'
import { shallow } from 'enzyme'
import Result from '../result'

it('renders without crashing with label and value', () => {
  const props = {
    label: 'myLabel',
    value: 56
  }
  const wrapper = shallow(<Result {...props} />)
  expect(wrapper.find('dt').text()).toEqual(props.label)
  expect(parseInt(wrapper.find('dd').text(), 10)).toEqual(props.value)
})
