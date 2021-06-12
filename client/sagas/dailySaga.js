import axios from "axios";
import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  DAILY_POST_FAILURE,
  DAILY_POST_REQUEST,
  DAILY_POST_SUCCESS,
} from "../reducer/daily";

function addDailyAPI(data) {
  return axios.post("/daily", data);
}

function* addDaily(action) {
  try {
    yield delay(1000);
    yield put({
      type: DAILY_POST_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: DAILY_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchDaily() {
  yield takeLatest(DAILY_POST_REQUEST, addDaily);
}

export default function* dailySaga() {
  yield all([fork(watchDaily)]);
}
