import React, { FC, Dispatch } from 'react';
import { Grid, TextField } from '@material-ui/core';
import buttons from '../../collections/ButtonsCollection';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import { connect } from 'react-redux';
import { IState } from '../../interfaces/IState';
import { Action } from 'redux';
import { IButtonInfo } from '../../interfaces/IButtonInfo';

// interface ICalculatorProps {
//   output: string,
//   select: 
// }

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

const Calculator: FC = (props: any) => {
  const { output, select } = props;
  const handleClick = (buttonInfo:IButtonInfo) => select(buttonInfo);

  return <div style={styles.container}>
    <Grid container xs={12} spacing={16} style={styles.mainGrid}>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          fullWidth
          InputProps={{
            readOnly: true,
            value: output
          }}
        />
      </Grid>
      <ButtonsPanel handleClick={handleClick} buttonsInfo={buttons} />
    </Grid>
  </div>
}

const mapStateToProps = (state:IState)/*: ICalculatorProps*/ => {
  return {
      output: state.output
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    select: (buttonInfo: IButtonInfo) => {
      dispatch({type: buttonInfo.type, label: buttonInfo.label})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);