

import style from './Customer.css'
import Selector from '../Selector/Selector';

import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Customer = ({customer}) => {

  const [selected, changeSelection ] = useState(`email`)

  return (
 <div>
        <h2 className={style.h2}>Клиент</h2>
        <Selector
          selected={selected}
          options={customer}
          changeSelection={(option) => changeSelection(option)}
        />
      </div>
  )
}

Customer.propTypes = {

}

export default Customer

