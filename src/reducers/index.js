// All reudcers are setup here
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from './usersReducer';
import eventsReducer from './eventsReducer';

export default combineReducers({
    auth: authReducer,
    users: usersReducer,
    events: eventsReducer
});