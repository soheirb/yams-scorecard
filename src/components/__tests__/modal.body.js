import React from 'react'
import { shallow } from 'enzyme'
import ModalBody from '../modal.body'

describe('input behaviour', () => {
  it('should render and display the score value', () => {
    const props = {
      crossed: false,
      value: 34,
      onScoreChange: jest.fn(),
      onCross: jest.fn()
    }
    const wrapper = shallow(<ModalBody {...props} />)

    expect(wrapper.find('input[type="number"]').length).toEqual(1)
    expect(wrapper.find('input[type="number"]').props().value).toEqual(props.value)
    expect(wrapper.find('button#crossing > b').text()).toEqual('X')
  })

  it('should render and display 0 as value if crossed', () => {
    const props = {
      crossed: true,
      value: 0,
      price: 15,
      onScoreChange: jest.fn(),
      onCross: jest.fn()
    }
    const wrapper = shallow(<ModalBody {...props} />)

    expect(wrapper.find('input[type="number"]').length).toEqual(1)
    expect(wrapper.find('input[type="number"]').props().value).toEqual(props.value)
    expect(wrapper.find('button#crossing').text()).toEqual('\u2714')
  })

  it('should render and display the price if price and not crossed', () => {
    const props = {
      crossed: false,
      value: 0,
      price: 15,
      onScoreChange: jest.fn(),
      onCross: jest.fn()
    }
    const wrapper = shallow(<ModalBody {...props} />)

    expect(wrapper.find('input[type="number"]').length).toEqual(1)
    expect(wrapper.find('input[type="number"]').props().value).toEqual(props.price)
    expect(wrapper.find('input[type="number"]').props().readOnly).toBeTruthy()
    expect(wrapper.find('button#crossing > b').text()).toEqual('X')
  })

  it('should call onScoreChange when input change', () => {
    const props = {
      crossed: false,
      value: 10,
      onScoreChange: jest.fn(),
      onCross: jest.fn()
    }
    const wrapper = shallow(<ModalBody {...props} />)
    const inputProps = wrapper.find('input[type="number"]').props()

    inputProps.onChange({target: { value: props.value }})

    expect(props.onScoreChange.mock.calls.length).toEqual(1)
    expect(props.onScoreChange.mock.calls[0][0].target.value).toEqual(props.value)
  })

  it('should call onCross when the cross button is clicked', () => {
    const props = {
      crossed: false,
      value: 10,
      onScoreChange: jest.fn(),
      onCross: jest.fn()
    }
    const wrapper = shallow(<ModalBody {...props} />)
    const buttonProps = wrapper.find('button#crossing').props()

    buttonProps.onClick()

    expect(props.onCross.mock.calls.length).toEqual(1)
  })
})
