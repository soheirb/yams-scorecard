import { createStore } from 'redux'
import reducers from '../reducers'

const preloadedState = {
  selectedScore: null,
  displayModal: false,
  yams: [{
    id: 'theAces',
    label: 'Les As',
    value: 2,
    minValue: 1,
    maxValue: 5
  }, {
    id: 'the2',
    label: 'Les Deux',
    value: 6,
    minValue: 2,
    maxValue: 10
  }, {
    id: 'the3',
    label: 'Les Trois',
    value: 9,
    minValue: 3,
    maxValue: 15
  }, {
    id: 'the4',
    label: 'Les Quatre',
    value: 12,
    minValue: 4,
    maxValue: 20
  }, {
    id: 'the5',
    label: 'Les Cinq',
    value: 15,
    minValue: 5,
    maxValue: 25
  }, {
    id: 'the6',
    label: 'Les Six',
    value: 18,
    minValue: 6,
    maxValue: 30
  }]
}

export default createStore(
  reducers,
  preloadedState
)
