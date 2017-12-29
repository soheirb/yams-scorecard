import React from 'react'
import PropTypes from 'prop-types'

const ModalFooter = ({crossed, price, value, onValidate, onReset}) => {
  return (
    <div className='modal-footer'>
      <div className='container'>
        <div className='row justify-content-between'>
          {price && value === 0 && !crossed &&
          (<div className='col-auto'>
            <button type='button' id='Valider' className='btn btn-primary' value={price} onClick={onValidate}>Valider</button>
          </div>)
        }
          {value !== 0 &&
          (<div className='col-auto'>
            <button type='button' id='MiseAZ' className='btn btn-primary' onClick={onReset}>Mettre à zéro</button>
          </div>)
        }
          <div />
          <div className='col-auto'>
            <button type='button' id='Fermer' className='btn btn-secondary' data-dismiss='modal'>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalFooter.propTypes = {
  crossed: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  price: PropTypes.number,
  onValidate: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

export default ModalFooter
