import { connect } from 'react-redux';

import Request from './Request'

const mapStateToProps = state => {
  return {
    customer: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeSelection: (option) => dispatch({ type: "SELECT", selected: option  })
  }
}

export const RequestContainer = connect(mapStateToProps, mapDispatchToProps)(Request); 