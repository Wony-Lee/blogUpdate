import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Footer from "./Footer";
import Nav from "./Navigation/Nav";

const NavForm = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    @media (max-width: 480px) {
        margin-top: 0;
        margin-bottom: 0;
    }
`;

const NavLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%;
`;

const NavRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    @media (max-width: 480px) {
        font-size: 8pt;
    }
`;

const NavText = styled.span`
    font-size: 15pt;
    color: white;
    margin-left: 30px;
    margin-right: 30px;
`;

const NavAtag = styled.a`
    color: wthie;
    cursor: pointer;
`;

const ContentLayout = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 0;
    min-height: 830px;
    margin-bottom: 80px;
    @media (max-width: 480px) {
        min-height: 480px;
    }
`;

const PageContents = styled.div`
    flex-direction: column;
    width: 100%;
    @media (max-width: 480px) {
        margin-top: 20px;
    }
`;

const VoidDiv = styled.div`
    width: 10%;
`;

const EtcDiv = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0;
    left: 0;
`;

const EtcText = styled.span`
    color: white;
`;

const GuestText = styled.div`
    color: white;
`;

const AppLayout = ({ children }) => {
    return (
        <>
            <Nav />
            {/* <NavForm>
                <NavLeft>
                    <Link href="/">
                        <NavAtag>
                            <NavText>Wony</NavText>
                        </NavAtag>
                    </Link>
                </NavLeft>
                <NavRight>
                    {user ? (
                        <Link href="/logout">
                            <a>
                                <GuestText onClick={onLogout}>
                                    로그아웃
                                </GuestText>
                            </a>
                        </Link>
                    ) : (
                        <Link href="/login">
                            <a>
                                <GuestText>로그인</GuestText>
                            </a>
                        </Link>
                    )}
                    <Link href="/blog">
                        <NavAtag>
                            <NavText>blog</NavText>
                        </NavAtag>
                    </Link>
                </NavRight>
            </NavForm> */}
            <ContentLayout>
                <VoidDiv></VoidDiv>
                <PageContents>{children}</PageContents>
                <VoidDiv></VoidDiv>
            </ContentLayout>
            <EtcDiv>
                <EtcText>
                    <Footer />
                </EtcText>
            </EtcDiv>
        </>
    );
};

export default AppLayout;
