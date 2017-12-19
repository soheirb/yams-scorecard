/* globals $ */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Modal extends Component {
  componentDidMount () {
    $('#myModal').modal()
    $('#myModal').on('hidden.bs.modal', function (e) {
      this.props.onClose()
    }.bind(this))
  }
  render () {
    return (
      <div className='modal' id='myModal' tabIndex='-1' role='dialog'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{this.props.score.label}</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group'>
                  <label htmlFor='score' className='col-form-label'>Votre score:</label>
                  <input type='number' className='form-control form-control-lg' id='score'
                    min={this.props.score.minValue}
                    max={this.props.score.maxValue}
                    value={this.props.score.value}
                    onChange={this.props.onScoreChange} />
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
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary'>Save changes</button>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  score: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired
}

export default Modal
