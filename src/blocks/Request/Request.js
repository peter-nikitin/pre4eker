import React, { Component } from 'react'

import { Input } from "./../Input/Input";
import style from './Request.css';
import Selector from '../Selector/Selector'

export default class Request extends Component {
  constructor(props) {
    super(props)
    
  }
  


  render() {
    const customerSelectedMethod = this.props.customer.selectorReducer.selected
    const customerSelectedField = this.props.customer.selectorReducer.options[customerSelectedMethod];
  console.log(customerSelectedField) 
    return (
      <div className={style.request}>
        <h2 className={style.h2}>Клиент</h2>
        <Selector field={customerSelectedField} options={this.props.customer.selectorReducer.options} changeSelection={this.props.changeSelection} />
      </div>
    )
  }
}
