import React from "react";
import styled from "@emotion/styled";
import PostForm from "./PostForm";

const GuestLayout = styled.div`
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
`;

const GuestContent = () => {
    return (
        <>
            <GuestLayout>
                <PostForm />
            </GuestLayout>
        </>
    );
};

export default GuestContent;
