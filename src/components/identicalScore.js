import React from 'react'
import PropTypes from 'prop-types'

const IdenticalScore = ({id, label, value, onScoreSelect}) => {
  return (
    <button onClick={onScoreSelect} id={id} type="button" className="list-group-item list-group-item-action">
    <dl className="row">
      <dt className="col">{label}</dt>
      <dd className="col-2">{value}</dd>
    </dl>
    </button>    
  )  
}

IdenticalScore.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  onScoreSelect: PropTypes.func
}

export default IdenticalScore