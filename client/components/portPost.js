import React from "react";
import styled from "@emotion/styled";

const PortPostLayout = styled.div`
    display: flex;
    justify-content: center;
`;

const PortPostForm = styled.form`
    border: 1px solid white;
    width: 50%;
    display: flex;
    justify-content: center;
`;

const PortPostContent = styled.div`
    width: 100%;
    padding: 10px;
`;

const PortSubject = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    color: white;
`;

const PortSpan = styled.span`
    margin-right: 30px;
`;

const PortInput = styled.input`
    height: 20px;
    width: 50%;
`;

const PortTextLayout = styled.div`
    width: 100%;
`;

const PortTextArea = styled.textarea`
    resize: none;
    width: 99%;
    height: 300px;
`;

const PortPreviewLayout = styled.div`
    border: 1px solid white;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`;
const PreviewForm = styled.div`
    border: 1px solid white;
    width: 200px;
    height: 200px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const PortBtnBox = styled.div`
    margin-top: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
`;

const WriteBtn = styled.button`
    margin: 10px;
    color: white;
`;

const PortPost = () => {
    return (
        <>
            <PortPostLayout>
                <PortPostForm>
                    <PortPostContent>
                        <PortSubject>
                            <PortSpan>제목</PortSpan>
                            <PortInput type="text" />
                        </PortSubject>
                        <PortTextLayout>
                            <PortTextArea />
                        </PortTextLayout>
                        <PortPreviewLayout>
                            <PreviewForm>미리보기</PreviewForm>
                            <input type="file" />
                        </PortPreviewLayout>
                        <PortBtnBox>
                            <WriteBtn style={{ color: "navy" }}>작성</WriteBtn>
                            <WriteBtn style={{ color: "red" }}>취소</WriteBtn>
                        </PortBtnBox>
                    </PortPostContent>
                </PortPostForm>
            </PortPostLayout>
        </>
    );
};

export default PortPost;
