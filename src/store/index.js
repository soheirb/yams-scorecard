import { createStore } from 'redux'
import reducers from '../reducers'

const preloadedState = {
  selectedScore: null,
  displayModal: false,
  yams: [{
    id: 'theAces',
    type: 'identical',
    label: 'Les As',
    value: 2,
    minValue: 1,
    maxValue: 5
  }, {
    id: 'the2',
    type: 'identical',
    label: 'Les Deux',
    value: 6,
    minValue: 2,
    maxValue: 10
  }, {
    id: 'the3',
    type: 'identical',
    label: 'Les Trois',
    value: 9,
    minValue: 3,
    maxValue: 15
  }, {
    id: 'the4',
    type: 'identical',
    label: 'Les Quatre',
    value: 12,
    minValue: 4,
    maxValue: 20
  }, {
    id: 'the5',
    type: 'identical',
    label: 'Les Cinq',
    value: 15,
    minValue: 5,
    maxValue: 25
  }, {
    id: 'the6',
    type: 'identical',
    label: 'Les Six',
    value: 18,
    minValue: 6,
    maxValue: 30
  }, {
    id: 'subTotal',
    label: 'Sous-Total',
    value: null
  }, {
    id: 'bonus',
    label: 'Bonus',
    bonus: 30,
    value: null
  }, {
    id: 'total1',
    label: 'Total 1',
    value: null
  }, {
    id: 'chance',
    type: 'combined',
    label: 'Chance',
    value: 2
  }, {
    id: 'brelan',
    type: 'combined',
    label: 'Brelan',
    value: 6
  }, {
    id: 'ptSuite',
    type: 'combined',
    label: 'Petite Suite',
    value: 9
  }, {
    id: 'gdSuite',
    type: 'combined',
    label: 'Grande Suite',
    value: 12
  }, {
    id: 'full',
    type: 'combined',
    label: 'Full',
    value: 15
  }, {
    id: 'carre',
    type: 'combined',
    label: 'Carré',
    value: 18
  }, {
    id: 'yams',
    type: 'combined',
    label: 'Yams',
    value: 18
  }, {
    id: 'total2',
    label: 'Total 2',
    value: null
  }, {
    id: 'yamsTotal',
    label: 'Total de la partie',
    value: null
  }]
}

export default createStore(
  reducers,
  preloadedState
)
