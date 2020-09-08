import { createStore, combineReducers } from "redux"
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import newsReducer from './news-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    newsPage: newsReducer,
    
});

let store = createStore(reducers);

export default store;