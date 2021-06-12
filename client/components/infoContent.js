import React from "react";

import styled from "@emotion/styled";

const InfoLayout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const LeftCard = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`;

const LeftCardText = styled.span`
    margin-top: 50px;
    border: 1px solid white;
    color: white;
    height: 300px;
    width: 300px;
`;

const RightCard = styled.div`
    width: 50%;
`;

const RightCardItem = styled.div`
    margin-top: 50px;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 300px;
`;

const RightTable = styled.table``;
const RightTd = styled.td`
    padding: 10px;
    @media (max-width: 480px) {
        font-size: 9pt;
    }
`;

const ListItem = styled.ul`
    list-style: none;
    padding: 0;
`;

const InfoContent = () => {
    return (
        <>
            <InfoLayout>
                <LeftCard>
                    <LeftCardText>asd</LeftCardText>
                </LeftCard>
                <RightCard>
                    <RightCardItem>
                        <RightTable>
                            <tbody>
                                <tr>
                                    <RightTd>이름</RightTd>
                                    <RightTd>홍길동</RightTd>
                                </tr>
                                <tr>
                                    <RightTd>나이</RightTd>
                                    <RightTd>28세</RightTd>
                                </tr>
                                <tr>
                                    <RightTd>거주</RightTd>
                                    <RightTd>강서구</RightTd>
                                </tr>
                                <tr>
                                    <RightTd>별자리</RightTd>
                                    <RightTd>처녀자리</RightTd>
                                </tr>
                                <tr>
                                    <RightTd>구성</RightTd>
                                    <RightTd>
                                        <ListItem>
                                            <li>NextJs</li>
                                            <li>Node Express</li>
                                            <li>MySQL</li>
                                        </ListItem>
                                    </RightTd>
                                </tr>
                            </tbody>
                        </RightTable>
                    </RightCardItem>
                </RightCard>
            </InfoLayout>
        </>
    );
};

export default InfoContent;
