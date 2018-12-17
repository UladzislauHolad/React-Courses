import React from 'react';
import WizardOption from './WizardOption';
import './WizardOptions.css';


function WizardOptions(props) {
  const optionsName = 'group';

  return (
      <div className="wizard-options">
        {props.options.map((option) => {
          return (
            <WizardOption 
              key={option.value}
              id={option.value} 
              name={optionsName} 
              value={option.value} 
              selected={props.selected === option.value}
              onChange={props.handleOptionChange}/>);
        })}
      </div>
  );
}

export default WizardOptions;