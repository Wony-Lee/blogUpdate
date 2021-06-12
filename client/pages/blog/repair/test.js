import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const TestForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  flex-direction: column;
`;

const ShowText = styled.span`
  font-size: 14pt;
  text-align: center;
  margin-bottom: 30px;
`;

const Test = () => {
  return (
    <>
      <div>
        <TestForm>
          <ShowText>
            눌러주셔서 감사합니다.
            <br />
            현재 페이지는 준비중 입니다.
          </ShowText>

          <Link href="/">
            <a>돌아가기</a>
          </Link>
        </TestForm>
      </div>
    </>
  );
};

export default Test;
