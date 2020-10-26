import { profileApi, usersApi } from "../components/api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'It`s my firts post', likesCount: 12 },
        { id: 2, message: 'Hello world', likesCount: 20 },
        { id: 3, message: 'How are you?', likesCount: 11 },
        { id: 4, message: 'How are you? Hhoho', likesCount: 0 }
    ],
    profile: null,
    status: " "
}

const profileReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_POST: {
            let newPostText = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPostText]
                
            }
        }
        
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    };
}

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST, newPostText
});

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => {

    return (dispatch) => {
        usersApi.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}
export const getStatus = (userId) => {

    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}
export const updateStatus = (status) => {

    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;