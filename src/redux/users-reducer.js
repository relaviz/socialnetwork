const FOLLOW = 'FOLLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: 1, photoUrl: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg', followed: false, fullName: 'Dmytriy', status: 'boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, photoUrl: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg', followed: false, fullName: 'Andrew', status: 'boss', location: { city: 'Uzhhorod', country: 'Ukraine' } },
        // { id: 3, photoUrl: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg', followed: true, fullName: 'Sasha', status: 'boss', location: { city: 'Uzhhorod', country: 'Ukraine' } },
        // { id: 4, photoUrl: 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg', followed: true, fullName: 'Valerii', status: 'boss', location: { city: 'Uzhhorod', country: 'Ukraine' } }
    ]
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
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }


        default:
            return state;
    };
}

export const followAC = (userId) => ({
    type: FOLLOW, userId
});
export const unfollowAC = (userId) => ({
    type: UNFOLLOW, userId
});
export const setUsersAC = (users) => ({
    type: SET_USERS, users
});

export default usersReducer;