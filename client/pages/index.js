import React from "react";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import { LOAD_USER_INFO_REQUEST } from "../reducer/user";

import BlogPage from "../components/blogPage";
import AppLayout from "../components/AppLayout";

const Home = () => {
    return (
        <>
            <AppLayout>
                <BlogPage />
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

        context.store.dispatch(END);
        await context.store.sagaTask.toPromise();
    }
);

export default Home;
