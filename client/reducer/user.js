import Produce from "../util/produce";

export const initialState = {
    logInLoading: false /* 로그인 로딩 */,
    logInDone: false,
    logInError: null,

    logOutLoading: false /* 로그인 로딩 */,
    logOutDone: false,
    logOutError: null,

    signUpLoading: false /* 회원가입 로딩 */,
    signUpDone: false,
    signUpError: null,

    userInfoLoading: false /* 정보 로딩 */,
    userInfoDone: false,
    userInfoError: null,

    user: null,
    userInfo: null,
    singUpDate: {},
    loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOAD_USER_INFO_REQUEST = "LOAD_USER_INFO_REQUEST";
export const LOAD_USER_INFO_SUCCESS = "LOAD_USER_INFO_SUCCESS";
export const LOAD_USER_INFO_FAILURE = "LOAD_USER_INFO_FAILURE";

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    };
};

export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    };
};

const reducer = (state = initialState, action) =>
    Produce(state, (draft) => {
        switch (action.type) {
            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.logInDone = true;
                draft.user = action.data;
                break;
            case LOG_IN_FAILURE:
                draft.logInLoading = false;
                draft.logInError = action.error;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = null;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false;
                draft.logOutDone = true;
                draft.user = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
                break;
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpError = action.error;
            case LOAD_USER_INFO_REQUEST:
                draft.userInfoLoading = true;
                draft.userInfoDone = false;
                draft.userInfoError = null;
                break;
            case LOAD_USER_INFO_SUCCESS:
                draft.userInfoLoading = false;
                draft.userInfoDone = true;
                draft.user = action.data;
                break;
            case LOAD_USER_INFO_FAILURE:
                draft.userInfoLoading = false;
                draft.userInfoError = action.error;
                break;
            default:
                break;
        }
    });

export default reducer;
