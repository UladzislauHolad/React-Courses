import React, { FC } from 'react';
import './WizardOption.css';


interface IWizardOptionProps {
  id: string,
  name: string,
  value: string,
  selected: boolean,
  changeHandler: Function
}

const WizardOption: FC<IWizardOptionProps> = (props) => {
  return (
    <p>
      <input id={props.id} 
        name={props.name} 
        type="radio" 
        defaultChecked={props.selected && true} 
        onChange={props.changeHandler(props.value)}/>
      <label className="option" htmlFor={props.id}>{props.value}</label>
    </p>
  );
}


export default WizardOption;