/* globals $ */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ModalBody from './modal.body'
import ModalFooter from './modal.footer'

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
            <ModalBody {...this.props.score} onCross={this.props.onCross}
              onScoreChange={this.props.onScoreChange} />
            <ModalFooter {...this.props.score} onReset={this.props.onReset}
              onValidate={this.props.onValidate} />
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  score: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onCross: PropTypes.func.isRequired
}

export default Modal
