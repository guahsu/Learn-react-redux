import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import * as actionTypes from '../../store/actions'

class Counter extends Component {
  state = {
    counter: 0
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => {
          return { counter: prevState.counter + 1 }
        })
        break
      case 'dec':
        this.setState(prevState => {
          return { counter: prevState.counter - 1 }
        })
        break
      case 'add':
        this.setState(prevState => {
          return { counter: prevState.counter + value }
        })
        break
      case 'sub':
        this.setState(prevState => {
          return { counter: prevState.counter - value }
        })
        break
      default:
        return null
    }
  }

  render () {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label='Increment' clicked={this.props.onIncrementCounter} />
        <CounterControl label='Decrement' clicked={this.props.onDecrementCounter} />
        <CounterControl label='Add 5' clicked={() => this.props.onAddCounter(5)} />
        <CounterControl label='Subtract 5' clicked={() => this.props.onSubtractCounter(5)} />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map(storeResult => (
            <li
              onClick={() => this.props.onDeleteResult(storeResult.id)}
              key={storeResult.id}>
              {storeResult.value}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    storedResults: state.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: (value) => dispatch({ type: actionTypes.ADD, value }),
    onSubtractCounter: (value) => dispatch({ type: actionTypes.SUBTRACT, value }),
    onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultId: id })
  }
}

// DON'T DO THIS -> connect(Counter)
// if there not have state -> connect(null, mapDispatchToProps)(Counter)
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
