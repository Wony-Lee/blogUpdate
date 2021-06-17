import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import {
    Section,
    Container,
    SectionHead,
    SectionBody,
    HeadLeft,
    HeadRight,
} from "../style/styled";

const BlogLayout = styled.div`
    display: flex;
    justify-content: center;
`;

const ContentLeft = styled.div`
    display: flex;
    width: 40%;
    margin-bottom: 5%;
    flex-direction: column;
    align-items: flex-end;
    background: #191970;
`;
const ContentRight = styled.div`
    display: flex;
    width: 40%;
    margin-top: 5%;
    flex-direction: column;
    align-items: flex-start;
    background: #191960;
`;

const ContentItem = styled.div`
    border: 2px solid white;
    display: flex;
    width: 250px;
    height: 250px;
    margin: 30px;
    color: white;
    @media (max-width: 480px) {
        width: 100px;
        height: 100px;
        margin: 10px;
    }
`;

const BodyContent = () => {
    const [openStudy, setOpenStudy] = useState(false);
    const [openGuests, setOpenGuests] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const [openBoard, setOpenBoard] = useState(false);
    const openStudyToggle = useCallback(() => {
        setOpenStudy((prev) => !prev);
    }, []);
    const openGuestsToggle = useCallback(() => {
        setOpenGuests((prev) => !prev);
    }, []);
    const openContactToggle = useCallback(() => {
        setOpenContact((prev) => !prev);
    }, []);
    const openBoardToggle = useCallback(() => {
        setOpenBoard((prev) => !prev);
    }, []);

    return (
        <>
            <Container>
                <Section>
                    <SectionHead>
                        <HeadLeft>Study</HeadLeft>
                        <HeadRight onClick={openStudyToggle}>
                            전체보기
                        </HeadRight>
                    </SectionHead>
                    {openStudy && <SectionBody>Study 게시글</SectionBody>}
                </Section>
                <Section>
                    <SectionHead>
                        <HeadLeft>Guests</HeadLeft>
                        <HeadRight onClick={openGuestsToggle}>
                            전체보기
                        </HeadRight>
                    </SectionHead>
                    {openGuests && <SectionBody>Guests 게시글</SectionBody>}
                </Section>
                <Section>
                    <SectionHead>
                        <HeadLeft>Contact</HeadLeft>
                        <HeadRight onClick={openContactToggle}>
                            전체보기
                        </HeadRight>
                    </SectionHead>
                    {openContact && <SectionBody>Contact 게시글</SectionBody>}
                </Section>
                <Section>
                    <SectionHead>
                        <HeadLeft>Board</HeadLeft>
                        <HeadRight onClick={openBoardToggle}>
                            전체보기
                        </HeadRight>
                    </SectionHead>
                    {openBoard && (
                        <SectionBody>
                            <div>Board 게시글</div>
                        </SectionBody>
                    )}
                </Section>
            </Container>
            {/* <BlogLayout>
                <ContentLeft>
                    <ContentItem>
                        <Link href="/info">
                            <a>소개</a>
                        </Link>
                    </ContentItem>
                    <ContentItem>
                        <Link href="/blog/port/portfolio">
                            <a>포트폴리오</a>
                        </Link>
                    </ContentItem>
                </ContentLeft>
                <ContentRight>
                    <ContentItem>
                        <Link href="/board">
                            <a>게시판</a>
                        </Link>
                    </ContentItem>
                    <ContentItem>
                        <Link href="/guest">
                            <a>방명록</a>
                        </Link>
                    </ContentItem>
                </ContentRight>
            </BlogLayout> */}
        </>
    );
};

export default BodyContent;
