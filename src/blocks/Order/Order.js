import React, { Component } from "react";

import style from "./Order.css";
import Selector from "../Selector/Selector";
import Input from "../Input/Input";
import CustomFields from '../CustomFields/CustomFields';

export default class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedID: "mindboxId",
      customFields: []
    };

    this.ids = this.props.order.ids;

    this.changeSelection = this.changeSelection.bind(this);
    this.addCustomField = this.addCustomField.bind(this);
    this.removeCustomField = this.removeCustomField.bind(this);

  }

  changeSelection(option) {
    this.setState({
      selectedID: option,
    });
  }

  addCustomField() {
    this.setState({
      customFields:  [...this.state.customFields, 1]
    }) 
  }

  removeCustomField(e) {
 
    const array = [...this.state.customFields]; // make a separate copy of the array
  const index = array.indexOf(e.target.value)
  if (index !== -1) {
    array.splice(index, 1);
    this.setState({customFields: array});
  }
  }

  render() {
    return (
      <div>
        <h2 className={style.h2}>Заказ</h2>
        <Selector
          selected={this.state.selectedID}
          options={this.ids}
          changeSelection={this.changeSelection}
          label="Идентификатор заказа"
        />

        <div className={style.inline}>
          <div className={style.half}>
            <Input label={this.props.order.cashdesk} name="cashdesk" />
          </div>
          <div className={style.half}>
            <Input label={this.props.order.deliveryCost} name="deliveryCost" />
          </div>
        </div>
        <div className={style.inline}>
          <div className={style.half}>
            <Input label={this.props.order.area} name="area" />
          </div>
          <div className={style.half}>
            <Input
              label={this.props.order.pointOfContact}
              name="pointOfContact"
            />
          </div>
        </div>

      <CustomFields addCustomField={this.addCustomField} removeCustomField={this.removeCustomField} fields={this.state.customFields} />
      </div>
    );
  }
}
