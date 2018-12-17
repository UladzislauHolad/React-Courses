import React, { Component } from 'react';
import Wizard from './components/Wizard';
import WizardSteps from './collections/stepsCollection';


class App extends Component {
  render() {
    return <Wizard steps={WizardSteps}/>;
  }
}

export default App;