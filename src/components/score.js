import React from 'react'
import PropTypes from 'prop-types'

const Score = ({id, label, value, type, onScoreSelect}) => {
  let onClick = type && (type === 'identical' || type === 'combined') ? onScoreSelect : () => {}
  return (
    <tr onClick={onClick} id={id}>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
}

Score.propTypes = {
  label: PropTypes.string.isRequired,
  onScoreSelect: PropTypes.func.isRequired
}

export default Score
