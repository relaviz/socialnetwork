const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Person1' },
        { id: 2, name: 'Person2' },
        { id: 3, name: 'Person3' },
        { id: 4, name: 'Person4' },
        { id: 5, name: 'Person5' },
        { id: 6, name: 'Person6' },
        { id: 7, name: 'Person7' }
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