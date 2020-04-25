import React, { Component } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import style from "./Order.css";
import Selector from "../Selector/Selector";
import CustomFields from "../CustomFields/CustomFields";

export default class Order extends Component {
  constructor({ order, customFields, ...props }) {
    super(props);

    this.state = {
      selectedID: "mindboxId",
    };

    this.ids = order.ids;

    this.changeSelection = this.changeSelection.bind(this);
    this.addCustomField = this.addCustomField.bind(this);
    this.removeCustomField = this.removeCustomField.bind(this);
  }

  changeSelection(option) {
    this.setState({
      selectedID: option,
    });
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
            <Input label={this.order.cashdesk} name="cashdesk" />
          </div>
          <div className={style.half}>
            <Input label={this.order.deliveryCost} name="deliveryCost" />
          </div>
        </div>
        <div className={style.inline}>
          <div className={style.half}>
            <Input label={this.order.area} name="area" />
          </div>
          <div className={style.half}>
            <Input label={this.order.pointOfContact} name="pointOfContact" />
          </div>
        </div>

        <CustomFields
          addCustomField={() => ({})}
          removeCustomField={() => ({})}
          fields={this.customFields}
        />
      </div>
    );
  }
}

Order.defaultProps = {
  customFields: {},
};

Order.propTypes = {
  order: PropTypes.object.isRequired,
  customFields: PropTypes.object,
};
