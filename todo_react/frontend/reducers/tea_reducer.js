import { RECIEVE_TEA } from "../actions/tea_actions.js";

//from lecture

const teasReducer = (state = {}, action) => {

    //we want the object to be immutable
    Object.freeze(state);

    const nextState = Object.assign({}, state);
    //make a copy if the od state that is modified
    switch (action.type) {
        case RECIEVE_TEA:
            nextState[action.tea.id] = action.tea;
            return nextState;
        default:
            return state;
    }
};

// export default teasReducer;




import { RECIEVE_CUP } from "../actions/tea_actions.js";

const cupsReducer = (state = {} ,action) => {
    Object.freeze(state);

    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECIEVE_CUP:
            nextState[action.cup.id] = action.cup;
            return nextState;
        default:
            return state;
    }
}

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    teas: teasReducer,
    cups: cupsReducer
})

export default rootReducer;


// export default cupsReducer;