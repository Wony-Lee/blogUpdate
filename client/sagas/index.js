import { all, fork } from "redux-saga/effects";
import axios from "axios";
import postSaga from "./postSaga";
import userSaga from "./userSaga";
import boardSaga from "./boardSaga";
import { backURL } from "../config/config";

axios.defaults.baseURL = backURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([fork(postSaga), fork(userSaga), fork(boardSaga)]);
}
