import React from 'react'
import PropTypes from 'prop-types'

const Score = ({id, label, value, onSelect}) => (
  <tr onClick={onSelect} id={id}>
    <td>{label}</td>
    <td>{value}</td>
  </tr>
)

Score.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default Score
