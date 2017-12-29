import React from 'react'
import { shallow } from 'enzyme'
import ModalFooter from '../modal.footer'

it('should render with the closing button only', () => {
  const props = {
    crossed: false,
    value: 0,
    onValidate: jest.fn(),
    onReset: jest.fn()
  }
  const wrapper = shallow(<ModalFooter {...props} />)

  expect(wrapper.find('button').length).toEqual(1)
  expect(wrapper.find('button#Fermer').text()).toEqual('Fermer')
})

it('should render with the closing and reset button', () => {
  const props = {
    crossed: false,
    value: 5,
    onValidate: jest.fn(),
    onReset: jest.fn()
  }
  const wrapper = shallow(<ModalFooter {...props} />)

  expect(wrapper.find('button').length).toEqual(2)
  expect(wrapper.find('button#MiseAZ').text()).toEqual('Mettre à zéro')
  expect(wrapper.find('button#Fermer').text()).toEqual('Fermer')
})

it('should render with the closing only if crossed', () => {
  const props = {
    crossed: true,
    value: 0,
    // price: PropTypes.number,
    onValidate: jest.fn(),
    onReset: jest.fn()
  }
  const wrapper = shallow(<ModalFooter {...props} />)

  expect(wrapper.find('button').length).toEqual(1)
  expect(wrapper.find('button#Fermer').text()).toEqual('Fermer')
})

it('should render with the closing and validate button if price', () => {
  const props = {
    crossed: false,
    value: 0,
    price: 15,
    onValidate: jest.fn(),
    onReset: jest.fn()
  }
  const wrapper = shallow(<ModalFooter {...props} />)

  expect(wrapper.find('button').length).toEqual(2)
  expect(wrapper.find('button#Valider').text()).toEqual('Valider')
  expect(wrapper.find('button#Fermer').text()).toEqual('Fermer')
})

it('should call onValidate with the price if the validate button is clicked', () => {
  const props = {
    crossed: false,
    value: 0,
    price: 15,
    onValidate: jest.fn(),
    onReset: jest.fn()
  }
  const wrapper = shallow(<ModalFooter {...props} />)
  const button = wrapper.find('button#Valider')

  button.props().onClick(button.props())

  expect(props.onValidate.mock.calls.length).toEqual(1)
  expect(props.onValidate.mock.calls[0][0].value).toEqual(props.price)
})

it('should call onReset if the reset button is clicked', () => {
  const props = {
    crossed: false,
    value: 5,
    onValidate: jest.fn(),
    onReset: jest.fn()
  }
  const wrapper = shallow(<ModalFooter {...props} />)
  const button = wrapper.find('button#MiseAZ')

  button.props().onClick()

  expect(props.onReset.mock.calls.length).toEqual(1)
})
