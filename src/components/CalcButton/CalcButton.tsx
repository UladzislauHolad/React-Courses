import React, { FC } from 'react';
import { Button } from '@material-ui/core';

interface ICalcButtonProps {
    label: string,
}

const CalcButton: FC<ICalcButtonProps> = (props) => {
    const {label} = props;

    return <Button 
        variant="contained" 
        onClick={()=> console.log(label)}
        fullWidth
      >{label}</Button>
}

export default CalcButton;