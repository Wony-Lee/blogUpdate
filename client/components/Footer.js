import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const FooterSection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 10pt;
    margin: 10px;
    color: black;
    & a {
        margin-right: 10px;
        margin-left: 10px;
        color: hotpink;
        text-decoration: none;
    }
    & a:hover {
        color: red;
    }
`;

const Footer = () => {
    return (
        <>
            <FooterSection>
                <div>
                    <Link href="https://github.com/Wony-Lee">
                        <a>WonyGithub</a>
                    </Link>
                    <span>||</span>
                    <Link href="https://www.youtube.com/user/korealsw1">
                        <a>MyBroYoutube</a>
                    </Link>
                </div>
                <span>Copyright © Wony Corp. All rights reserved.</span>
            </FooterSection>
        </>
    );
};

export default Footer;
