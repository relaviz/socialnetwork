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
    }
}

export default state;