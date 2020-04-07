import React from 'react';
import style from './optional.css';

import Input  from '../Input/Input';

export default function Optional(props) {
  const cf = [
    {
      label: "Название доп. поля",
      name: "customFieldExternalId"
    },
    {
      label: "Значение",
      name: "customFieldVslue"
    },

  ]
  // console.log(props)
  return (
    
    <div className={style.optional}>
      <span className={style.optionalName}>{props.field.label}</span>
      <button className={style.optionalBtn} onClick={() => props.addCF()}>+</button>
      {props.field.fields.map( item => (
        <div className={style.cf}>
          <Input field={cf[0]} />
          <Input field={cf[1]} />
        </div>
      ))}
    </div>
  )
}
