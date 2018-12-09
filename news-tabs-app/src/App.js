import React from 'react';
import Tab from './components/Tab/Tab';
import Buttons from './services/buttonsService';
import Loader from './components/Loader/Loader';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Tab buttons={Buttons}></Tab>
            </div>
        );
    }
}
export default App;