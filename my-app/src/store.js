


const persistedState = loadState();
const store = createStore(
    app,
    persistedState
);
store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    });
});




import throttle from 'lodash.throttle';

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));