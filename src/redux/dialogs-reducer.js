const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 4, message: body });
            return state;
        default:
            return state;
    };
};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;