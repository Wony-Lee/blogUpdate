import React from "react";
import styled from "@emotion/styled";

const PortLayout = styled.div`
    width: 100%;

    color: white;
`;

const PortContent = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 50px;
`;

const PortContentItem = styled.div`
    text-align: center;
    width: 100%;
    max-width: 200px;
    margin: 15px;
    border: 1px solid white;
    height: 200px;
`;

const PortFolioContent = () => {
    return (
        <>
            <PortLayout>
                <PortContent>
                    <PortContentItem>포트폴리오 아이템1</PortContentItem>
                    <PortContentItem>포트폴리오 아이템2</PortContentItem>
                    <PortContentItem>포트폴리오 아이템3</PortContentItem>
                    <PortContentItem>포트폴리오 아이템4</PortContentItem>
                    <PortContentItem>포트폴리오 아이템5</PortContentItem>
                </PortContent>
            </PortLayout>
        </>
    );
};

export default PortFolioContent;
