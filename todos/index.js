/**
 * Created by honoka on 16/4/12.
 */
"use strict";
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './stores/stores';

//let store = createStore(todoApp);
let rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <App />
        </Provider>,
    rootElement
)
