import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import newsReducer from './news-reducer';
import usersReducer from './users-reducer'
import authReducer from "./auth-reducer";
import  thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer
    
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// applyMiddleware - для того что бы вклинится в код. Но так же нужно 
// за инсталировать "npm i redux-thunk"

export default store;