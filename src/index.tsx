import React from 'react';
import ReactDOM from 'react-dom';
import NewsApp from './components/NewsApp';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <NewsApp />
    </Provider>,
    document.getElementById('root')
);