import configureStore from "./store/store.js";
// import {recievedGreenTea} from "./actions/tea_actions.js";

import {recieveTea} from "./actions/tea_actions.js";
import {recieveCup} from "./actions/tea_actions.js";

document.addEventListener("DOMContentLoaded",() => {
    console.log("tea-time");
    const store = configureStore();
    window.store = store;
    // window.recievedGreenTea = recievedGreenTea
    window.recieveTea = recieveTea;
    window.recieveCup = recieveCup;

})