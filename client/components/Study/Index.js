import React from "react";

import { Container } from "../style/styled";
import StudyCard from "./studyCard";
import StudyPost from "./studyPost";

const StudyMain = () => {
    return (
        <>
            <Container>
                <StudyPost />
                <StudyCard />
            </Container>
        </>
    );
};

export default StudyMain;
