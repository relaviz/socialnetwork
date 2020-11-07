import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import newsReducer from './news-reducer';
import usersReducer from './users-reducer'
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// applyMiddleware - для того что бы вклинится в код. Но так же нужно 
// за инсталировать "npm i redux-thunk"

export default store;