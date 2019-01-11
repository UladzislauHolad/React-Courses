import React, { FC, Dispatch } from 'react';
import { Grid, TextField } from '@material-ui/core';
import buttons from '../../collections/ButtonsCollection';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import { connect } from 'react-redux';
import { IState } from '../../interfaces/IState';
import { IButtonInfo } from '../../interfaces/IButtonInfo';
import { CalcAction } from '../../reducers/rootReducer';
import InfoPanel from '../InfoPanel/InfoPanel';

type ICalculatorPropsFromState = {
  output: string,
  buffer: string,
  operation: string
}

type ICalculatorPropsFromDispatch = {
  select: (value:CalcAction) => void
}

type ICalculatorProps = ICalculatorPropsFromDispatch & ICalculatorPropsFromState;

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

const Calculator: FC<ICalculatorProps> = (props) => {
  const { output, select, buffer, operation } = props;
  const handleClick = (buttonInfo:IButtonInfo) => select(buttonInfo);

  return <div style={styles.container}>
    <Grid container xs={12} spacing={8} style={styles.mainGrid}>
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
      <InfoPanel buffer={buffer} operation={operation} />
      <ButtonsPanel handleClick={handleClick} buttonsInfo={buttons} />
    </Grid>
  </div>
}

const mapStateToProps = (state:IState): ICalculatorPropsFromState => {
  return {
      output: state.output,
      buffer: String(state.firstNumber),
      operation: String(state.operation)
  }
}

const mapDispatchToProps = (dispatch: Dispatch<CalcAction>): ICalculatorPropsFromDispatch => {
  return {
    select: (buttonInfo: IButtonInfo) => {
      dispatch({type: buttonInfo.type, label: buttonInfo.label})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);