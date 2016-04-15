/**
 * Created by honoka on 16/4/12.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './stores/stores';

//let store = createStore(todoApp);
const rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <App />
        </Provider>,
    rootElement
)
