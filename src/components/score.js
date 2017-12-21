import React from 'react'
import PropTypes from 'prop-types'

const Score = ({id, label, value, type, onScoreSelect}) => {
  if (type && (type === 'identical' || type === 'combined')) {
    return (
      <button onClick={onScoreSelect} id={id} type="button" className="list-group-item list-group-item-action">
      <dl className="row">
        <dt className="col">{label}</dt>
        <dd className="col-2">{value}</dd>
      </dl>
      </button>    
    )
  } else {
    return (
      <li id={id} className="list-group-item list-group-item-info">
        <dl className="row">
          <dt className="col">{label}</dt>
          <dd className="col-2">{value}</dd>
        </dl>
      </li>
    )
  }
  
}

Score.propTypes = {
  label: PropTypes.string.isRequired,
  onScoreSelect: PropTypes.func.isRequired
}

export default Score
