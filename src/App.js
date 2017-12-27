// /* global $ */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import logo from './logo.svg'
import './App.css'
import IdenticalScore from './components/identicalScore'
import Result from './components/result'
import Modal from './containers/modal'
import { openModal } from './actions'

class App extends Component {
  render() {
    let scoreCards = this.props.scoreCards
    let identicalCards = scoreCards.identical.map( score => 
      <IdenticalScore 
        key={score.id}
        id={score.id}
        value={score.value}
        label={score.label}
        onScoreSelect={event => this.props.dispatch(openModal(event.currentTarget))} />
    )
    let combinedCards = scoreCards.combined.map( score => 
      <IdenticalScore 
        key={score.id}
        id={score.id}
        value={score.value}
        label={score.label}
        onScoreSelect={event => this.props.dispatch(openModal(event.currentTarget))} />
    )
    return (
      <div className='App'>
        { /* <header className='App-header'>
          <h4>Yams Score Card</h4>
        </header> */
        }        
        {identicalCards}
        <Result value={scoreCards.identicalSubTotal.value} label={scoreCards.identicalSubTotal.label} />
        <Result value={scoreCards.bonus.value} label={scoreCards.bonus.label} />
        <Result value={scoreCards.identicalTotal.value} label={scoreCards.identicalTotal.label} />
        {combinedCards}
        <Result value={scoreCards.combinedTotal.value} label={scoreCards.combinedTotal.label} />
        <Result value={scoreCards.gameTotal.value} label={scoreCards.gameTotal.label} />
        {
          this.props.displayModal && ( <Modal /> )          
        }    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayModal: state.displayModal,
    scoreCards: state.scoreCards
  }
}

export default connect(mapStateToProps)(App)
 