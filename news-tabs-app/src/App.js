import React from 'react';
import Tab from './components/Tab/Tab';
import * as ButtonsService from './services/buttonsService';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Tab buttons={ButtonsService.getButtons()}></Tab>
            </div>
        );
    }
}
export default App;