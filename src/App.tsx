import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Calculator from './components/Calculator/Calculator';

const App = () => <Fragment>
    <Typography component="h2" variant="h1" align={'center'} gutterBottom>
        Calculator
    </Typography>
    <Calculator />
</Fragment>

export default App;