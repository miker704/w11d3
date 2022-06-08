import { createStore } from "redux";
// import cupsReducer from "../reducers/tea_reducer";
// import teasReducer from "../reducers/tea_reducer";
// import rootReducer from "../reducers/tea_reducer";


// const store = createStore(() => ({}), preloadedState);


// const configureStore = (preloadedState = {}) => {
//     // return createStore(() => ({}), preloadedState);
//     // return createStore(teasReducer,preloadedState);
//     // return createStore(cupsReducer,preloadedState);
//     return createStore(rootReducer,preloadedState);


// };


import rootReducer from "../reducers/root_reducer.js";

const configureStore = (preloadedState = {}) => {

    return createStore(rootReducer, preloadedState);

};


export default configureStore;