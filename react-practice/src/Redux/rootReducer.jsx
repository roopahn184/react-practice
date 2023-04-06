import { combineReducers } from "redux";
import { messageReducer } from "./Message/Message.reducer";
import { counterReducer } from "./counter/counter.reducer";

let rootReducer = combineReducers({counter:counterReducer, message:messageReducer})

export {rootReducer}