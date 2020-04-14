import React from 'react'
import Customer from './Customer/Customer';
import Order from './Order/Order'

export default Response = (props) => {

  const {customer, order} = props.response

  return (
    <div>
      <Customer customer={customer}/>
      <Order order={order} />
    </div>
  )
}
