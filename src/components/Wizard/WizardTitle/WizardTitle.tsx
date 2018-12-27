import React, { FC } from 'react';
import './WizardTitle.css';


interface IWizzardTitleProps {
  value: string
}

const WizardTitle:FC<IWizzardTitleProps> = (props) => {
    return <h1>{props.value}</h1>;
}


export default  WizardTitle;