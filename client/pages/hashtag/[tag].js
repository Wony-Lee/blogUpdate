import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { END } from "redux-saga";

import axios from "axios";
import AppLayout from "../../components/AppLayout";
import ListHeadTitle from "../../components/Board/ListHeadTitle";
import ListSection from "../../components/Board/ListSection";

import wrapper from "../../store/configureStore";
import { LOAD_HASHTAG_BOARDS_REQUEST } from "../../reducer/board";

const Hashtag = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { tag } = router.query;
    const { boardPost, hasMoreBoards, loadBoardsLoading } = useSelector(
        (state) => state.board
    );
    useEffect(() => {
        function onScroll() {
            if (
                window.scrollY + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 300
            ) {
                if (hasMoreBoards && !loadBoardsLoading) {
                    dispatch({
                        type: LOAD_HASHTAG_BOARDS_REQUEST,
                        lastId:
                            boardPost[boardPost.length - 1] &&
                            boardPost[boardPost.length - 1].id,
                        data: tag,
                    });
                }
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [boardPost.length, hasMoreBoards, tag, loadBoardsLoading]);

    return (
        <AppLayout>
            <ListHeadTitle />
            {boardPost.map((board) => (
                <ListSection key={board.id} board={board} />
            ))}
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        const cookie = context.req ? context.req.headers.cookie : "";
        axios.defaults.headers.Cookie = "";
        if (context.req && cookie) {
            axios.defaults.headers.Cookie = cookie;
        }
        context.store.dispatch({
            type: LOAD_HASHTAG_BOARDS_REQUEST,
            data: context.params.tag,
        });
        context.store.dispatch(END);
        await context.store.sagaTask.toPromise();
    }
);

export default Hashtag;
