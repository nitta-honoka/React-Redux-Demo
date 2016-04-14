/**
 * Created by honoka on 16/4/12.
 */
"use strict";
import { createStore } from 'redux';
import todoApp from '../reducers/reducers';

let store = createStore(todoApp);
export default store;
