import { createStore } from 'redux'
import reducers from '../reducers'

const preloadedState = {
  selectedScore: null,
  displayModal: false,
  scoreCards: {
    identical: [{
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
    }],
    identicalSubTotal: {
      label: 'Sous-Total',
      value: null
    },
    bonus: {
      label: 'Bonus',
      bonus: 30,
      value: null
    }, 
    identicalTotal: {
      label: 'Total 1',
      value: null
    },
    combined: [{
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
    }],
    combinedTotal:  {
      label: 'Total 2',
      value: null
    },
    gameTotal:  {
      label: 'Score Final',
      value: null
    },
  }  
}

export default createStore(
  reducers,
  preloadedState
)
