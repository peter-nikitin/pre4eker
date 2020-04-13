import React from 'react'
import Customer from './Customer/Customer';

export default Response = (props) => {

  const {customer} = props.response

  return (
    <div>
      <Customer customer={customer}/>
    </div>
  )
}
