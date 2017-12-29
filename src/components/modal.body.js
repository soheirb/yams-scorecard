import React from 'react'
import PropTypes from 'prop-types'

const ModalBody = ({crossed, price, value, onScoreChange, onCross}) => {
  return (
    <div className='modal-body'>
      <form>
        <div className='form-group'>
          <label htmlFor='score' className='col-form-label'>Votre score:</label>
          <div className='input-group'>
            <input type='number' className='form-control form-control-lg' id='score'
              readOnly={!!price}
              value={price && !crossed ? price : value}
              min='0'
              onChange={onScoreChange} />
            <span className='input-group-btn'>
              <button id='crossing' className='btn btn-info' type='button' onClick={onCross}>
                {crossed ? '\u2714' : (<b>X</b>)}
              </button>
            </span>
          </div>
        </div>
        <div className='form-group'>
          <div className='form-check'>
            <label className='form-check-label'>
              <input className='form-check-input' type='checkbox' value='' />
            Score obtenu au premier lancé
          </label>
          </div>
        </div>
      </form>
    </div>
  )
}

ModalBody.propTypes = {
  crossed: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  price: PropTypes.number,
  onScoreChange: PropTypes.func.isRequired,
  onCross: PropTypes.func.isRequired
}

export default ModalBody
