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
                { id: 1, name: 'Valerii' },
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
            ]
        },
        profileIcons: {
            icon: [
                { id: 1, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3snEv9CcY-w2OVD4wwVZmTS5QuFRnO2xZbg&usqp=CAU' },
                { id: 2, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhlUJ9_4Au3qrw7-DlLRAC0N14CdTgfzHUsg&usqp=CAU' },
                { id: 3, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS2ACqki7yvVTzTTwm1zd82RGybYE5uQjLBg&usqp=CAU' },
                { id: 4, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQt8j1i9HnXi9L1vqX6y5Xi18r-NnDXnMfbg&usqp=CAU' }
            ],

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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }

    // addPost() {
        // let newPost = {
        //     id: 5,
        //     message: this._state.profilePage.newPostText,
        //     likesCount: 0
        // };
        // this._state.profilePage.posts.push(newPost);
        // this._state.profilePage.newPostText = '';
        // this._callSubscriber(this._state)
        
    // },

    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state)
    // },

    

}


window.store = store;

export default store;

