import React, { FC } from 'react';
import { Grid, TextField } from '@material-ui/core';
import CalcButton from '../CalcButton/CalcButton';
import buttons from '../../collections/ButtonsCollection';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';

const styles = {
  container: {
    padding: '5px',
    borderRadius: '5px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'gray',
    margin: 'auto',
    width: '400px'
  },
  mainGrid: {
    margin: 0
  }
}

const Calculator: FC = () => {
  return <div style={styles.container}>
    <Grid container xs={12} spacing={16} style={styles.mainGrid}>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          fullWidth
          InputProps={{
            readOnly: true
          }}
        />
      </Grid>
      <ButtonsPanel buttons={buttons} />
    </Grid>
  </div>
}

export default Calculator;