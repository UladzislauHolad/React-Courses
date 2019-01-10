import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { IButtonInfo } from '../../interfaces/IButtonInfo';

interface ICalcButtonProps {
    buttonInfo: IButtonInfo
    handleClick: any
}

const CalcButton: FC<ICalcButtonProps> = (props) => {
    const { buttonInfo, handleClick} = props;

    return <Button 
        variant="contained" 
        onClick={() => handleClick(buttonInfo)}
        fullWidth
      >{buttonInfo.label}</Button>
}

export default CalcButton;