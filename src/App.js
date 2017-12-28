// /* global $ */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import logo from './logo.svg'
import './App.css'
import ScoreCard from './containers/scoreCard'
import Result from './components/result'
import Modal from './containers/modal'
import { getTotals } from './reducers'

class App extends Component {
  render() {
    const { identical, combined } = this.props.scoreCards
    let totals = this.props.totals
    return (
      <div className='App'>
        <header className='App-header'>
          <h4>Yams Score Card</h4>
        </header>
        {identical.map( score => 
          <ScoreCard
            type="identical"
            score={score}
            key={score.id} />
        )}
        <Result value={totals.identicalSubTotal} label="Sous-Total" />
        <Result value={totals.bonus} label="Bonus" />
        <Result value={totals.identicalTotal} label="Total 1" />
        {combined.map( score => 
          <ScoreCard 
            type="combined"
            key={score.id}
            score={score} />
        )}
        <Result value={totals.combinedTotal} label="Total 1" />
        <Result value={totals.gameTotal} label="Total 1 + 2" />
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
    scoreCards: state.scoreCards,
    totals: getTotals(state)
  }
}

export default connect(mapStateToProps)(App)
 