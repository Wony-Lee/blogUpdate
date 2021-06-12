import React, { useCallback } from "react";
import styled from "@emotion/styled";
import PostImages from "./postImages";
import { useDispatch } from "react-redux";

const ReadContainer = styled.div`
    border: 1px solid white;
    height: 90%;
`;
const ReadSectionOne = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 60%;
`;

const ReadTitle = styled.div`
    padding: 20px;
    border: 1px solid white;
    color: white;
    margin-top: 10px;
    width: 70%;
    text-align: center;
`;

const ReadContent = styled.div`
    padding: 20px;
    color: white;
    border: 1px solid white;
    margin: 10px 0px;
    width: 70%;
    text-align: center;
    height: 100%;
`;

const ReadSectionTwo = styled.div`
    height: 30%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
`;

const ReadImage = styled.div`
    width: 80%;
    border: 1px solid white;
    text-align: center;
    color: white;
`;

const ReadSection = () => {
    const disptach = useDispatch();

    return (
        <>
            <ReadContainer>
                <ReadSectionOne>
                    <ReadTitle>title</ReadTitle>
                    <ReadContent>content</ReadContent>
                </ReadSectionOne>
                <ReadSectionTwo>
                    <ReadImage></ReadImage>
                </ReadSectionTwo>
            </ReadContainer>
        </>
    );
};

export default ReadSection;
