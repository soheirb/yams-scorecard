import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'

class Overlay extends Component {
  render () {
    const { label, price, crossed, value } = this.props.score
    return (
      <Modal show={this.props.displayModal} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='form-group'>
              <label htmlFor='score' className='col-form-label'>Votre score:</label>
              <div className='input-group'>
                <input type='number' className='form-control form-control-lg' id='score'
                  readOnly={!!price}
                  value={price && !crossed ? price : value}
                  min='0'
                  onChange={this.props.onScoreChange} />
                <span className='input-group-btn'>
                  <button className='btn btn-info' type='button' onClick={this.props.onCross}>
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
        </Modal.Body>
        <Modal.Footer>
          <div className='container'>
            <div className='row justify-content-between'>
              {
                price && value === 0 && !crossed &&
                  (<div className='col-auto'>
                    <button type='button' className='btn btn-primary' value={price} onClick={this.props.onValidate}>Valider</button>
                  </div>)
              }
              {
                value !== 0 &&
                  (<div className='col-auto'>
                    <button type='button' className='btn btn-primary' onClick={this.props.onReset}>Mettre à zéro</button>
                  </div>)
              }
              <div />
              <div className='col-auto'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>Fermer</button>
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

Overlay.propTypes = {
  score: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.number
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onCross: PropTypes.func.isRequired
}

export default Overlay
