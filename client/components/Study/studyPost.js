import React, { useCallback, useState } from "react";

import styled from "@emotion/styled";

const StudyFrom = styled.div`
    border: 1px solid white;
`;
const StudySection = styled.div`
    display: flex;
    margin: 10px;
`;
const StudyNav = styled.div`
    width: 33.3%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;
const StudyInput = styled.input`
    width: 100%;
    height: 100%;
`;
const StudySelect = styled.select`
    border: 0;
    width: 100%;
    height: 100%;
`;
const StudyBody = styled.div`
    width: 99.9%;
`;
const StudyText = styled.textarea`
    resize: none;
    width: 100%;
    height: 150px;
    border: 0;
`;
const StudyFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const StudyPost = () => {
    const [dateValue, setDateValue] = useState("");
    const [typeValue, setTypeValue] = useState("");

    const onTypeChange = useCallback((e) => {
        setTypeValue(e.target.value);
    });

    const onDateChange = useCallback((e) => {
        setDateValue(e.target.value);
    }, []);

    return (
        <>
            <StudyFrom>
                <StudySection>
                    <StudyNav>
                        <StudyInput placeholder="Title" maxLength="20" />
                    </StudyNav>
                    <StudyNav>
                        <StudyInput
                            value={dateValue}
                            onChange={onDateChange}
                            type="date"
                        />
                    </StudyNav>
                    <StudyNav>
                        <StudySelect value={typeValue} onChange={onTypeChange}>
                            <option>스터디 모집1</option>
                            <option>스터디 모집2</option>
                            <option>스터디 모집3</option>
                            <option>스터디 모집4</option>
                            <option>스터디 모집5</option>
                            <option>스터디 모집6</option>
                        </StudySelect>
                    </StudyNav>
                </StudySection>
                <StudySection>
                    <StudyBody>
                        <StudyText maxLength="300" />
                    </StudyBody>
                </StudySection>
                <StudySection>
                    <StudyFooter>
                        <button>작성</button>
                        <button>취소</button>
                    </StudyFooter>
                </StudySection>
            </StudyFrom>
        </>
    );
};

export default StudyPost;
