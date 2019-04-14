import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux'; 
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import * as serviceWorker from './serviceWorker';
const store = createStore(allReducers);


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
