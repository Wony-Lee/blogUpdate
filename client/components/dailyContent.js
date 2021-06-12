import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const DailyLayout = styled.div`
  border: 1px solid white;
  width: 100%;
`;
const DayContent = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const DayItem = styled.div`
  width: 20%;
  margin: 15px;
  border: 1px solid white;
  height: 200px;
`;

const DayImage = styled.div`
  height: 80%;
`;

const DaySubject = styled.div`
  border: 1px solid white;
  display: flex;
  height: 20%;
  align-items: center;
`;

const Dayul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const Dayli = styled.li`
  padding-left: 20px;
`;

const DailyContent = () => {
  return (
    <>
      <DailyLayout>
        <DayContent>
          <DayItem>
            <Link href="/blog/dailyView">
              <a>
                <DayImage>일상 컨텐츠1</DayImage>
                <DaySubject>
                  <Dayul>
                    <Dayli>제목</Dayli>
                    <Dayli>제목 내용</Dayli>
                  </Dayul>
                </DaySubject>
              </a>
            </Link>
          </DayItem>
        </DayContent>
      </DailyLayout>
    </>
  );
};

export default DailyContent;
