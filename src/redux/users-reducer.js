import { usersApi } from "../components/api/api";

const FOLLOW = 'FOLLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGGLE_IS_FETCHING = 'TOOGGLE_IS_FETCHING';
const TOOGGLE_IS_FOLLOWING_PROGRESS = 'TOOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id=>id!==action.userId) }
        }

        default:
            return state;
    };
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const tooggleIsFetching = (isFetching) => ({ type: TOOGGLE_IS_FETCHING, isFetching });
export const tooggleFollowignProgress = (isFetching, userId) => ({ type: TOOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export const requestUsers = (page, pageSize) => {

    return (dispatch) => {

        dispatch(tooggleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersApi.getUsers(page, pageSize) 
            .then(data => {
                dispatch(tooggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));

            });
    }
}

export const follow = (userId) => {

    return (dispatch) => {
        dispatch(tooggleFollowignProgress(true, userId))
        usersApi.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch( followSuccess(userId))
                }
                dispatch(tooggleFollowignProgress(false, userId));
            });
    }
}

export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(tooggleFollowignProgress(true, userId))
        usersApi.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch( unfollowSuccess(userId))
                }
                dispatch(tooggleFollowignProgress(false, userId));
            });
    }
}



export default usersReducer;