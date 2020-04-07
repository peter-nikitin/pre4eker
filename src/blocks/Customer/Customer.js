import React, { Component } from 'react'

import style from './Customer.css'
import Selector from '../Selector/Selector';

export default class Customer extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      selected: `email`
    }

    this.options = this.props.customer
    this.changeSelection = this.changeSelection.bind(this)
  }

  changeSelection(option) {
    this.setState({
      selected: option
    })
  }

  render() {
    // console.log(this.state.selected);
    return (
      <div>
        <h2 className={style.h2}>Клиент</h2>
        <Selector
          selected={this.state.selected}
          options={this.options}
          changeSelection={this.changeSelection}
        />
      </div>
    )
  }
}
