const UPDATE_NEW_NEWS = 'UPDATE-NEW-NEWS';
const SEND_NEWS = 'SEND-NEWS';

let initialState = {
    news: [
        {id: 1, newsMessage: 'First new news'}
    ],
    newNewsBody: ''
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_NEWS:
            state.newNewsBody = action.news;
            return state;
        case SEND_NEWS:
            let news = state.newNewsBody;
            state.newNewsBody = '';
            state.news.push({ id: 2, newsMessage: news });
            return state;
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