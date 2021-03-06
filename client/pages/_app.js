import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";
import style from "../components/style/styled";

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>WonyBlog</title>
            </Head>
            <Component />
        </>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
