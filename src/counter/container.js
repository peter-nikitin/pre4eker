import { connect } from 'react-redux';

import {Component} from './component';
import {incrementAsync} from './actions';

const mapStateToProps = state => { 
  
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch(
      incrementAsync
    ),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT'})
  }
}

export const Container = connect(mapStateToProps, mapDispatchToProps)(Component); 
