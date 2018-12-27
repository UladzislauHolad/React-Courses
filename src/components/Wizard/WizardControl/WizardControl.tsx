import React, { FC } from 'react';
import './WizardControl.css';


interface IWizardControlProps {
  handlePrev: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  handleNext: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  prevHidden: boolean,
  nextHidden: boolean,
  nextDisabled: boolean
}

const WizardControl: FC<IWizardControlProps> = (props) => {
  return (
    <>
      <button onClick={props.handlePrev} 
        hidden={props.prevHidden}
      >
        Prev
      </button>
      <button onClick={props.handleNext} 
        hidden={props.nextHidden} 
        disabled={props.nextDisabled}
      >
        Next
      </button>
    </>
  );
}


export default WizardControl;