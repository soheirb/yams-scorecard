import React from 'react'
import PropTypes from 'prop-types'

const ScoreCard = ({score, onScoreSelect}) => {
  let formattedValue = score.crossed ? (<b>{'\u2014'}</b>) : score.value
  formattedValue = formattedValue !== 0 ? formattedValue : ''
  return (
    <button onClick={onScoreSelect} id={score.id} type='button' className='list-group-item list-group-item-action'>
      <dl className='row'>
        <dt className='col'>{score.label}</dt>
        <dd className='col-2'>{formattedValue}</dd>
      </dl>
    </button>
  )
}

ScoreCard.propTypes = {
  score: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    crossed: PropTypes.bool.isRequired
  }).isRequired,
  onScoreSelect: PropTypes.func.isRequired
}

export default ScoreCard
