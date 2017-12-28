import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const ScoreCard = ({score, onScoreSelect}) => {
  let formattedValue = score.crossed ? (<b>{'\u2014'}</b>) : score.value
  formattedValue = formattedValue !== 0 ? formattedValue : ''
  return (
    <Button bsClass='list-group-item list-group-item-action' onClick={onScoreSelect} id={score.id}>
      <dl className='row'>
        <dt className='col'>{score.label}</dt>
        <dd className='col-2'>{formattedValue}</dd>
      </dl>
    </Button>
  )
}

ScoreCard.propTypes = {
  score: PropTypes.object.isRequired,
  onScoreSelect: PropTypes.func.isRequired
}

export default ScoreCard
