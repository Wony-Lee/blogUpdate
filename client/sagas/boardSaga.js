import axios from "axios";
import { all, call, fork, put, takeLatest, throttle } from "redux-saga/effects";
import {
    ADD_BOARD_FAILURE,
    ADD_BOARD_REQUEST,
    ADD_BOARD_SUCCESS,
    LOAD_BOARDS_FAILURE,
    LOAD_BOARDS_REQUEST,
    LOAD_BOARDS_SUCCESS,
    LOAD_BOARD_FAILURE,
    LOAD_BOARD_REQUEST,
    LOAD_BOARD_SUCCESS,
    LOAD_HASHTAG_BOARDS_FAILURE,
    LOAD_HASHTAG_BOARDS_REQUEST,
    LOAD_HASHTAG_BOARDS_SUCCESS,
    UPLOAD_IMAGES_FAILURE,
    UPLOAD_IMAGES_REQUEST,
    UPLOAD_IMAGES_SUCCESS,
} from "../reducer/board";

function addBoardAPI(data) {
    return axios.post("/board", data);
}

function* addBoard(action) {
    try {
        const result = yield call(addBoardAPI, action.data);
        yield put({
            type: ADD_BOARD_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: ADD_BOARD_FAILURE,
            error: err.response.data,
        });
    }
}

function uploadImagesAPI(data) {
    return axios.post(`/board/images`, data);
}

function* uploadImages(action) {
    try {
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: err.response.data,
        });
    }
}

function loadBoardAPI(data) {
    return axios.get(`/board/${data}`);
}
function* loadBoard(action) {
    try {
        const result = yield call(loadBoardAPI, action.data);
        yield put({
            type: LOAD_BOARD_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_BOARD_FAILURE,
            error: err.response.data,
        });
    }
}

function loadBoardsAPI(lastId) {
    return axios.get(`/boards?lastId=${lastId || 0}`);
}

function* loadBoards(action) {
    try {
        const result = yield call(loadBoardsAPI, action.lastId);
        yield put({
            type: LOAD_BOARDS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_BOARDS_FAILURE,
            error: err.response.data,
        });
    }
}

function loadHashtagBoardsAPI(data, lastId) {
    return axios.get(
        `/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`
    );
}
function* loadHashtagBoards(action) {
    try {
        const result = yield call(
            loadHashtagBoardsAPI,
            action.data,
            action.lastId
        );
        yield put({
            type: LOAD_HASHTAG_BOARDS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_HASHTAG_BOARDS_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchAddBoard() {
    yield takeLatest(ADD_BOARD_REQUEST, addBoard);
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLoadBoard() {
    yield takeLatest(LOAD_BOARD_REQUEST, loadBoard);
}

function* watchLoadBoards() {
    yield throttle(5000, LOAD_BOARDS_REQUEST, loadBoards);
}

function* watchLoadHashtagBoards() {
    yield throttle(5000, LOAD_HASHTAG_BOARDS_REQUEST, loadHashtagBoards);
}

export default function* boardSaga() {
    yield all([
        fork(watchAddBoard),
        fork(watchUploadImages),
        fork(watchLoadBoard),
        fork(watchLoadBoards),
        fork(watchLoadHashtagBoards),
    ]);
}
