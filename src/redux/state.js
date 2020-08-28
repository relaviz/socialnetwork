import { rerenderTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'It`s my firts post', likesCount: 12 },
            { id: 2, message: 'Hello world', likesCount: 20 },
            { id: 3, message: 'How are you?', likesCount: 11 },
            { id: 4, message: 'How are you? Hhoho', likesCount: 0 }
        ],

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
}

export let addPost = (postMessage) => {
    debugger;
      let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderTree(state)
}

export default state;

