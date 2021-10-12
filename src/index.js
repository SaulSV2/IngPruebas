import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';

// se añade el middleware al create store
const store = createStore(rootReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);