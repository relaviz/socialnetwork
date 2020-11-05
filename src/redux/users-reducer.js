import { usersApi } from "../components/api/api";
import { updateObjectArray } from "../utils/object-helpers";

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
                users: updateObjectArray(state.users, action.userId, "id", {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, "id", {followed: false})

                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: false }
                //     }
                //     return u;
                // })
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
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
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


export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(tooggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await usersApi.getUsers(page, pageSize);

    dispatch(tooggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(tooggleFollowignProgress(true, userId));
    const response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(tooggleFollowignProgress(false, userId));
}


export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.follow.bind(userId), followSuccess);
}


export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(userId), unfollowSuccess);
}



export default usersReducer;