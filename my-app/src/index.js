import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';
import throttle from 'lodash/throttle';

import App from './App';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
        return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


const saveState = (state) => {
    console.log(state)
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
};


const persistedState = loadState();

const store = createStore(
    postReducer,
    persistedState
);


store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);