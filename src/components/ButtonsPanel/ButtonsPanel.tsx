import React, { FC, Fragment } from 'react';
import { IButtonInfo } from '../../interfaces/IButtonInfo';
import { Grid } from '@material-ui/core';
import CalcButton from '../CalcButton/CalcButton';

interface IButtonsPanelProps {
  buttonsInfo: IButtonInfo[],
  handleClick: (buttonInfo: IButtonInfo) => void
}

const ButtonsPanel: FC<IButtonsPanelProps> = (props) => {
  const { buttonsInfo, handleClick } = props;

  return <Fragment>
    {buttonsInfo.map((buttonInfo) => {
      return <Grid key={buttonInfo.label} item xs={3}>
        <CalcButton handleClick={handleClick} buttonInfo={buttonInfo} />
      </Grid>
    })}
  </Fragment>
}

export default ButtonsPanel;