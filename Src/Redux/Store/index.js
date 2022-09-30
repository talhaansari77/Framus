import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
import AuthReducer from '../Reducers'
const rootReducer = combineReducers({
    AuthReducer: AuthReducer,
});
const store = createStore(rootReducer, applyMiddleware());

export { store };
