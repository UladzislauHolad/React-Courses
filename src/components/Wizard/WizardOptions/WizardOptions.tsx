import React, { FC } from 'react';
import WizardOption from './WizardOption';
import './WizardOptions.css';
import { IStepOption } from '../../../models/IStepOption';


interface IWizardOptionsProps {
  selected: string,
  optionChangeHandler: Function
  options: IStepOption[],
}

const WizardOptions: FC<IWizardOptionsProps> = (props) => {
  const optionsName = 'group';

  return (
      <div className="wizard-options">
        {props.options.map((option: IStepOption) => {
          return (
            <WizardOption 
              key={option.value}
              id={option.value} 
              name={optionsName} 
              value={option.value} 
              selected={props.selected === option.value}
              changeHandler={props.optionChangeHandler}/>);
        })}
      </div>
  );
}


export default WizardOptions;