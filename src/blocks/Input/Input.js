import React from 'react'
import styles from './input.css';

export default function Input({label, name, onChange, ...props}) {
  
  return (
    <div className={styles.inputItem}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input type="text" className={styles.input} name={name} onChange={ (e) => onChange(e)}/>
    </div>
  )
}
