import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import CalcButton from '../CalcButton/CalcButton';
import buttons from '../../collections/ButtonsCollection';

const Calculator: FC = () => {
    return <Grid container>
        {buttons.map((button) => {
            return <Grid key={button.label} item xs={3}>
                <CalcButton label={button.label} />
            </Grid>
        })}
    </Grid>
}

export default Calculator;