import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';
import {loadState,saveState} from './localStorage'
import throttle from 'lodash/throttle';

import App from './App';

const persistedState = loadState();

const store = createStore(
    postReducer,
    persistedState
);


store.subscribe(throttle(() => {
    saveState({
        postReducer: store.getState().postReducer
    });
}, 1000));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);