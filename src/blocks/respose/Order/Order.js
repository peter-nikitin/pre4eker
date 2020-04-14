import React from 'react'
import PropTypes from 'prop-types'

import statuses from './statuses';
import stylesShared from "Src/customer.css";
import CustomFileds from '../CustomFields/CustomFields'

const Order = ({order}) => {

  const {processingStatus, deliveryCost, totalPrice, customFields} = order;

  return (
     <div className={stylesShared.customer}>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.name}>Статус обработки</div>
          <div className={stylesShared.value}>
            {statuses[processingStatus] || processingStatus}
          </div>
        </div> 
      </div>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.value}>Доставка</div>
        </div> 
        <div className={stylesShared.half}>
          <div className={stylesShared.value}>
            {deliveryCost}
          </div>
        </div> 
      </div>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.value}>Итоговая цена</div>
        </div> 
        <div className={stylesShared.half}>
          <div className={stylesShared.value}>
            {totalPrice}
          </div>
        </div> 
      </div>
      { customFields && <CustomFileds data={customFields} />}
      
    </div>
  )
}

Order.propTypes = {
  order: PropTypes.object
}

export default Order
