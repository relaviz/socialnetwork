const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText;
           return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }]
            };
            default:
            return state;
    };
};

export const sendMessageCreator = (newMessageText) => ({
    type: SEND_MESSAGE, newMessageText
});

export default dialogsReducer;