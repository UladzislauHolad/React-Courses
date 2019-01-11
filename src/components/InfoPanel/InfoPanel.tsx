import React, { FC } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

interface IInfoPanelProps {
  buffer: string,
  operation: string
}

const styles = {
  item: {
    paddingLeft: '10px'
  }
}

const InfoPanel: FC<IInfoPanelProps> = (props) => {
  const { buffer, operation } = props;

  return <Grid container spacing={8}>
    <Grid item xs={6} style={styles.item}>
      <Typography>Buffer: {buffer === 'undefined' ? '' : buffer}</Typography>
    </Grid>
    <Grid item xs={6} style={styles.item}>
      <Typography>Operation: {operation === 'undefined' ? '' : operation}</Typography>
    </Grid>
  </Grid>
}

export default InfoPanel;