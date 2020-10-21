import { usersApi } from "../components/api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_ESER_PROFILE = 'SET_ESER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'It`s my firts post', likesCount: 12 },
        { id: 2, message: 'Hello world', likesCount: 20 },
        { id: 3, message: 'How are you?', likesCount: 11 },
        { id: 4, message: 'How are you? Hhoho', likesCount: 0 }
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}

const profileReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_ESER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    };
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const setUserProfile = (profile) => ({ type: SET_ESER_PROFILE, profile })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const getProfile = (userId) => {
    
    return (dispatch) => {
        usersApi.getUserId(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export default profileReducer;