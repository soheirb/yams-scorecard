import React from 'react'
import PropTypes from 'prop-types'

const Result = ({id, label, value}) => {
  return (
    <li id={id} className='list-group-item list-group-item-info'>
      <dl className='row'>
        <dt className='col'>{label}</dt>
        <dd className='col-2'>{value}</dd>
      </dl>
    </li>
  )
}

Result.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number
}

export default Result
