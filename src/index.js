import { createStore } from "redux";
import counterReducer from "./reducers";

import { incrementCounter, decrementCounter, showCounter } from "./actions";

const store = createStore(counterReducer);

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);


store.dispatch(showCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());

unsubscribe();