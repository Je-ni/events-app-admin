import { FETCH_ADMIN } from "./../actions/type";

const defaultState = {
    loggedIn: false, 
    token: null,
    userName: null,
    firstName: null,
    email: null,
    loginMessage: ''
}

export default function(state = defaultState, action) {
    switch(action.type) {
        case FETCH_ADMIN:
            if (action.payload.success) {
                return {
                    ...state,      
                    loggedIn: true,
                    token: action.payload.data._token,
                    loginMessage: action.payload.message,
                    userName: action.payload.data.userName,
                    firstName: action.payload.data.firstName || "Admin Name",
                    email:  action.payload.data.email,
                    id: action.payload.data.id
                }
            }else {
                return {
                    ...state,      
                    loggedIn: false,
                    loginMessage: action.payload.message
                }
            }
        default: 
            return state;
    }
}