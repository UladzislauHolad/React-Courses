import React, { FC, Fragment } from 'react';
import { IButtonInfo } from '../../interfaces/IButtonInfo';
import { Grid } from '@material-ui/core';
import CalcButton from '../CalcButton/CalcButton';

interface IButtonsPanelProps {
  buttons: IButtonInfo[]
}

const ButtonsPanel: FC<IButtonsPanelProps> = (props) => {
  const { buttons } = props;

  return <Fragment>
    {buttons.map((button) => {
      return <Grid key={button.label} item xs={3}>
        <CalcButton label={button.label} />
      </Grid>
    })}
  </Fragment>
}

export default ButtonsPanel;