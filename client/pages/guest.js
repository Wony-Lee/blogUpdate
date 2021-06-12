import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POSTS_REQUEST } from "../reducer/guest";
import { END } from "redux-saga";
import wrapper from "../store/configureStore";
import axios from "axios";
import { LOAD_USER_INFO_REQUEST } from "../reducer/user";

const Guest = () => {
    const dispatch = useDispatch();
    const { guestPost, hasMorePosts, loadPostsLoading } = useSelector(
        (state) => state.guest
    );
    useEffect(() => {
        function onScroll() {
            if (
                window.scrollY + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 300
            ) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = guestPost[guestPost.length - 1]?.id;
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        lastId,
                    });
                }
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasMorePosts, loadPostsLoading, guestPost]);
    return (
        <>
            <AppLayout>
                <PostForm />
                {guestPost.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </AppLayout>
        </>
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
            type: LOAD_USER_INFO_REQUEST,
        });
        context.store.dispatch({
            type: LOAD_POSTS_REQUEST,
        });
        context.store.dispatch(END);
        await context.store.sagaTask.toPromise();
    }
);

export default Guest;
