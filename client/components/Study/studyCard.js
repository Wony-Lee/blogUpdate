import React, { useCallback, useState } from "react";

import {
    Section,
    SectionHead,
    SectionBody,
    HeadRight,
    HeadLeft,
} from "../style/styled";
const StudyCard = () => {
    const [openToggle, setOpenToggle] = useState(false);
    const openToggleHandler = useCallback(() => {
        setOpenToggle((prev) => !prev);
    }, []);
    return (
        <>
            <Section>
                <SectionHead>
                    <HeadLeft>Title</HeadLeft>
                    <HeadRight onClick={openToggleHandler}>전체보기</HeadRight>
                </SectionHead>
                {openToggle && <SectionBody>구현중</SectionBody>}
            </Section>
        </>
    );
};
export default StudyCard;
