const UPDATE_NEW_NEWS = 'UPDATE-NEW-NEWS';
const SEND_NEWS = 'SEND-NEWS';

let initialState = {
    news: [
        { id: 1, newsMessage: 'First new news' }
    ],
    newNewsBody: ''
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_NEWS: {
            return {
                ...state,
                newNewsBody: action.news
            }
        }
        case SEND_NEWS: {
            let news = state.newNewsBody;
            
            return {
                ...state,
                news:  [...state.news, { id: 2, newsMessage: news }],
                newNewsBody: ''
            }
        }
        default:
            return state;
    }
}

export const sendNewsCreator = () => ({
    type: SEND_NEWS
});
export const updateNewNewsBodyCreator = (news) => ({
    type: UPDATE_NEW_NEWS, news: news
});

export default newsReducer;