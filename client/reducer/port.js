import Produce from "../util/produce";

const initialState = {
    portPost: [
        {
            id: 1,
            User: {
                id: 1,
                name: "Wony",
            },
            subtitle: "Hello",
            content: "Hi",
        },
    ],
    portPostLoading: false,
    portPostDone: false,
    portPostError: null,
};

export const PORT_POST_REQUEST = "PORT_POST_REQUEST";
export const PORT_POST_SUCCESS = "PORT_POST_SUCCESS";
export const PORT_POST_FAILURE = "PORT_POST_FAILURE";

const reducer = (state = initialState, action) =>
    Produce(state, (draft) => {
        switch (action.type) {
            default:
                return state;
        }
    });

export default reducer;
