import { authApi } from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload,
                // isAuth: true
            }



        default:
            return state;
    };
}

export const setUser = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: { userId, email, login, isAuth }
});

export const getAuthUserData = () => (dispatch) => {
    
    authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {

                let { id, email, login } = response.data.data;
                dispatch(setUser(id, email, login, true))
            }

        });

}
export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe )
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }

        });

}
export const logout = () => (dispatch) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUser(null, null, null, false))
            }

        });

}

export default authReducer;