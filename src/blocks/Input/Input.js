import React from 'react'
import styles from './input.css';

export default function Input({field}) {
  return (
    <div className={styles.form}>
      <label htmlFor="" className={styles.label}>{field.label}</label>
      <input type="text" className={styles.input} name={field.name}/>
    </div>
  )
}
