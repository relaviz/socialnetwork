import { stopSubmit } from "redux-form";
import { authApi, securityApi } from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null //if null, then captcha is not required 
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    };
}

export const setUser = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: { userId, email, login, isAuth }
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl }
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authApi.me();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUser(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authApi.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityApi.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export const logout = () => async (dispatch) => {
    const response = await authApi.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUser(null, null, null, false))
    }
}

export default authReducer;