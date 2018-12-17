import React from 'react';


function SummaryItem(props) {
  return <li><strong>{props.item.label}:</strong>{props.item.value}</li>
}

export default SummaryItem;