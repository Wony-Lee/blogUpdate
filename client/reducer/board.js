import Produce from "../util/produce";

export const initialState = {
    boardPost: [],
    imagesPath: [],
    singleBoard: [],
    hasMoreBoards: true,

    addBoardLoding: false,
    addBoardDone: false,
    addBoardError: null,

    uploadImagesloading: false,
    uploadImagesDone: false,
    uploadImagesError: null,

    loadBoardLoading: false,
    loadBoardDone: false,
    loadBoardError: null,

    loadBoardsLoading: false,
    loadBoardsDone: false,
    loadBoardsError: null,

    searchDataLoding: false,
    searchDataDone: false,
    searchDataError: null,
};

export const ADD_BOARD_REQUEST = "ADD_BOARD_REQUEST";
export const ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";
export const ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const REMOVE_BOARD_REQUEST = "REMOVE_BOARD_REQUEST";
export const REMOVE_BOARD_SUCCESS = "REMOVE_BOARD_SUCCESS";
export const REMOVE_BOARD_FAILURE = "REMOVE_BOARD_FAILURE";

export const LOAD_BOARD_REQUEST = "LOAD_BOARD_REQUEST";
export const LOAD_BOARD_SUCCESS = "LOAD_BOARD_SUCCESS";
export const LOAD_BOARD_FAILURE = "LOAD_BOARD_FAILURE";

export const LOAD_HASHTAG_BOARDS_REQUEST = "LOAD_HASHTAG_BOARDS_REQUEST";
export const LOAD_HASHTAG_BOARDS_SUCCESS = "LOAD_HASHTAG_BOARDS_SUCCESS";
export const LOAD_HASHTAG_BOARDS_FAILURE = "LOAD_HASHTAG_BOARDS_FAILURE";

export const LOAD_BOARDS_REQUEST = "LOAD_BOARDS_REQUEST";
export const LOAD_BOARDS_SUCCESS = "LOAD_BOARDS_SUCCESS";
export const LOAD_BOARDS_FAILURE = "LOAD_BOARDS_FAILURE";

export const SEARCH_DATA_REQUEST = "SEARCH_DATA_REQUEST";
export const SEARCH_DATA_SUCCESS = "SEARCH_DATA_SUCCESS";
export const SEARCH_DATA_FAILURE = "SEARCH_DATA_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const addBoard = (data) => ({
    type: ADD_BOARD_REQUEST,
    data,
});

const reducer = (state = initialState, action) =>
    Produce(state, (draft) => {
        switch (action.type) {
            case ADD_BOARD_REQUEST:
                draft.addBoardLoding = true;
                draft.addBoardDone = false;
                draft.addBoardError = null;
                break;
            case ADD_BOARD_SUCCESS:
                draft.addBoardLoding = false;
                draft.addBoardDone = true;
                draft.boardPost.unshift(action.data);
                draft.imagesPath = [];
                break;
            case ADD_BOARD_FAILURE:
                draft.addBoardLoding = false;
                draft.addBaordError = action.error;
                break;

            case LOAD_BOARD_REQUEST:
                draft.loadBoardLoading = true;
                draft.loadBoardDone = false;
                draft.loadBoardError = null;
                console.log("LOAD_BOARD REQUEST START");
                break;
            case LOAD_BOARD_SUCCESS:
                draft.loadBoardLoding = false;
                draft.loadBoardDone = true;
                draft.singleBoard = action.data;
                console.log("LOAD_BOARD_SUCCESS");
                break;
            case LOAD_BOARD_FAILURE:
                draft.loadBoardLoading = false;
                draft.loadBoardError = action.error;
                break;
            case LOAD_HASHTAG_BOARDS_REQUEST:
            case LOAD_BOARDS_REQUEST:
                draft.loadBoardsLoading = true;
                draft.loadBoardsDone = false;
                draft.loadBoardsError = null;
                break;

            case LOAD_HASHTAG_BOARDS_SUCCESS:
            case LOAD_BOARDS_SUCCESS:
                draft.loadBoardsLoading = false;
                draft.loadBoardsDone = true;
                draft.boardPost = draft.boardPost.concat(action.data);
                draft.hasMoreBoards = action.data.length === 10;
                break;

            case LOAD_HASHTAG_BOARDS_FAILURE:
            case LOAD_BOARDS_FAILURE:
                draft.loadBoardsLoading = false;
                draft.loadBoardsError = action.error;
                break;

            case UPLOAD_IMAGES_REQUEST:
                draft.uploadImagesloading = true;
                draft.uploadImagesDone = false;
                draft.uploadImagesError = null;
                break;
            case UPLOAD_IMAGES_SUCCESS:
                draft.imagesPath = action.data;
                draft.uploadImagesloading = false;
                draft.uploadImagesDone = true;
                break;
            case UPLOAD_IMAGES_FAILURE:
                draft.uploadImagesloading = false;
                draft.uploadImagesError = action.error;
                break;
            case REMOVE_IMAGE:
                draft.imagesPath = draft.imagesPath.filter(
                    (v, i) => i !== action.data
                );
                break;
            default:
                break;
        }
    });

export default reducer;
