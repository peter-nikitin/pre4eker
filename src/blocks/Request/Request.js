import React, { Component } from "react";
 
import style from "./Request.css";
import Customer from '../Customer/Customer';
import Order from '../Order/Order';


export default class Request extends Component {
  constructor(props) {
    super(props);
    this.customer = this.props.request.requestReducer.customer;
    this.order = this.props.request.requestReducer.order
  }

  render() {
 

    return (
      <div className={style.request}>
        <Customer customer={this.customer}/>
        <Order  order={this.order}/>
        

      </div>
    );
  }
}
