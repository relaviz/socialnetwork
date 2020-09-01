import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'It`s my firts post', likesCount: 12 },
                { id: 2, message: 'Hello world', likesCount: 20 },
                { id: 3, message: 'How are you?', likesCount: 11 },
                { id: 4, message: 'How are you? Hhoho', likesCount: 0 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Anton' },
                { id: 3, name: 'Slavik' },
                { id: 4, name: 'Pasha' },
                { id: 5, name: 'Evald' },
                { id: 6, name: 'Andrew' },
                { id: 7, name: 'Tomi' }
            ],

            messages: [
                { id: 1, message: 'Yo' },
                { id: 2, message: 'Hello world' },
                { id: 3, message: 'How are you?' },
            ],
            newMessageBody: ''
        },
        profileIcons: {
            icon: [
                { id: 1, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3snEv9CcY-w2OVD4wwVZmTS5QuFRnO2xZbg&usqp=CAU' },
                { id: 2, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhlUJ9_4Au3qrw7-DlLRAC0N14CdTgfzHUsg&usqp=CAU' },
                { id: 3, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS2ACqki7yvVTzTTwm1zd82RGybYE5uQjLBg&usqp=CAU' },
                { id: 4, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQt8j1i9HnXi9L1vqX6y5Xi18r-NnDXnMfbg&usqp=CAU' }
            ],

        },
        newsPage: {
            news: [
                {id: 1, newsMessage: 'First new news'}
            ],
            newNewsBody: ''
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.newsPage = newsReducer(this._state.newsPage, action);

        this._callSubscriber(this._state);

        
        
    }
}





window.store = store;

export default store;

