import React from 'react';
import './WizardControl.css';


function WizardControl(props) {
  return (
    <>
      <button onClick={props.handlePrev} hidden={props.prevHidden}>Prev</button>
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