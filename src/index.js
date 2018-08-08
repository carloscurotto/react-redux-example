import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import counterReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

import { incrementCounter, decrementCounter } from "./actions";

const store = createStore(counterReducer);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Dispatch some actions
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());

// Stop listening to state updates
unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
