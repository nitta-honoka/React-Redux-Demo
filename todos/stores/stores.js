/**
 * Created by honoka on 16/4/12.
 */
"use strict";
import { createStore } from 'redux';
import todoApp from '../reducers/reducers';

export default function configureStore(initialState) {
    const create = window.devToolsExtension
        ? window.devToolsExtension()(createStore)
        : createStore;

    let store = createStore(todoApp);

    return store;
}

