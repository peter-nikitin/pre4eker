import React, { Component } from "react";
 
import style from "./RequestForm.css";
import Customer from '../Customer/Customer';
import Order from '../Order/Order';


export default class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.customer = this.props.request.customer;
    this.order = this.props.request.order
  }

  render() {
 console.log(this.props)

    return (
      <div className={style.request}>
        <Customer customer={this.customer}/>
        <Order  order={this.order}/>
        

      </div>
    );
  }
}
