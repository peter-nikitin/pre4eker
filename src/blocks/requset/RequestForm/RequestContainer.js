import { connect } from 'react-redux';

import RequestForm from './RequestForm'

const mapStateToProps = ({requestReducer}) => ({
  request: requestReducer
  }
)

const mapDispatchToProps = dispatch => {

  return {
    changeCustomerIdentifier: (option) => {      
      return dispatch({ type: "SELECT_CUSTOMER",  selected: option })},
    changeOrderIdentifier: (option) => {      
      return dispatch({ type: "SELECT_ORDER_IDENTIFIER",  selected: option })},
    addCF: (option) => {      
      return dispatch({ type: "ADD_CUSTOM_FIELD" })},
    onInputChange: (value) => {
      return dispatch({ type: "SET_REQUEST_VALUE" })
    }
  }
}

export const RequestContainer = connect(mapStateToProps, mapDispatchToProps)(RequestForm); 