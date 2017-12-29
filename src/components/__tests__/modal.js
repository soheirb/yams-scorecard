import React from 'react'
import { shallow } from 'enzyme'
import Modal from '../modal'

it('should render without crashing and pass props correctly', () => {
  const props = {
    score: {
      label: 'myLabel',
      value: 0,
      id: 'myId',
      price: 15,
      crossed: false
    },
    onClose: jest.fn(),
    onScoreChange: jest.fn(),
    onValidate: jest.fn(),
    onReset: jest.fn(),
    onCross: jest.fn()
  }
  const wrapper = shallow(<Modal {...props} />)

  expect(wrapper.find('h5').text()).toEqual(props.score.label)
  expect(wrapper.find('ModalBody').length).toEqual(1)
  expect(wrapper.find('ModalBody').props()).toEqual({
    ...props.score,
    onScoreChange: props.onScoreChange,
    onCross: props.onCross
  })
  expect(wrapper.find('ModalFooter').length).toEqual(1)
  expect(wrapper.find('ModalFooter').props()).toEqual({
    ...props.score,
    onValidate: props.onValidate,
    onReset: props.onReset
  })
})
