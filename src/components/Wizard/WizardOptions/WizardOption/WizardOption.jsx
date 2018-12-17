import React from 'react';


function WizardOption(props) {
  return (
    <p>
      <input id={props.id} name={props.name} type="radio" defaultChecked={props.selected && true} onChange={props.onChange(props.value)}/>
      <label htmlFor={props.id}>{props.value}</label>
    </p>
  );
}

export default WizardOption;