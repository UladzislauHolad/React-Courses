import React from 'react';
import SummaryItem from './SummaryItem';
import './WizardSummary.css';


function WizardSummary(props) {
  return (
    <div className="wizard-summary">
      <ul>
        {props.items.map((item) => {
          return <SummaryItem key={item.value} item={item} />
        })}
      </ul>
    </div>
  );
}

export default WizardSummary;