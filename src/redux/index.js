import {createStore,combineReducers} from "redux"
import nowplayinglistReducer from "./reducer/nowplayinglistReducer"
import comingsoonlistReducer from "./reducer/comingsoonlistReducer"
import {applyMiddleware} from "redux";
import promiseMiddleware from "redux-promise" 


var reducer = combineReducers({

    nowplayinglistReducer,
    comingsoonlistReducer    

});


const store = createStore(reducer,applyMiddleware(promiseMiddleware));

export default store;