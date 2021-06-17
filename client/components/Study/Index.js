import React, { useCallback, useState } from "react";

import {
    Container,
    Section,
    SectionHead,
    SectionBody,
    HeadRight,
    HeadLeft,
} from "../style/styled";

const StudyMain = () => {
    const [openToggle, setOpenToggle] = useState(false);
    const openToggleHandler = useCallback(() => {
        setOpenToggle((prev) => !prev);
    }, []);
    return (
        <>
            <Container>
                <Section>
                    <SectionHead>
                        <HeadLeft>Title</HeadLeft>
                        <HeadRight onClick={openToggleHandler}>
                            전체보기
                        </HeadRight>
                    </SectionHead>
                    {openToggle && <SectionBody>구현중</SectionBody>}
                </Section>
            </Container>
        </>
    );
};

export default StudyMain;
