import React, {useState} from "react";
import shevron from "../../assets/shevron.svg";
import Input from "../Input/Input";
import style from "./Selector.css";

export default function Selector(props) {
  const [isOptionsShown, toggleOptions] = useState(false)
  const options = Object.values(props.options);
  const {field} = props;
  
  let selectedInputField;
    if (field.name === "externalID") {
      selectedInputField = <input type="text" className={style.field}   value="" placeholder="Название идентификатора"/>
    } else {
      selectedInputField = <input type="text" className={style.field}    value={field.label}  placeholder="Название идентификатора"/>
    } 
  // console.log(props)
  return (
    <div className={style.selector}>
      <div>
        <label htmlFor="" className={style.label}>
          Поле
        </label>
        <div className={style.selectorGroup}> 
          <button className={style.button} onClick={() => toggleOptions(!isOptionsShown)}>
            <img src={shevron} />
          </button>
         {selectedInputField}
        </div>
        {isOptionsShown && <ul className={style.list}>

         
        {options.map( (item, index) => (
          <li className={style.listItem} key={index} onClick={() => {
            props.changeSelection(item.name)
            toggleOptions(!isOptionsShown)
            }} > {item.label}</li>
        ))} 
      </ul> }
        
      </div>


      <Input field={props.field} />
      
    </div>
  );
}
