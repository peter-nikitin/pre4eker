import React from 'react'
import styles from './input.css';

export default function Input(props) {
  console.log(props);
  
  return (
    <div className={styles.inputItem}>
      <label htmlFor="" className={styles.label}>{props.label}</label>
      <input type="text" className={styles.input} name={props.name} onChange={ (e) => props.onInputChange}/>
    </div>
  )
}
