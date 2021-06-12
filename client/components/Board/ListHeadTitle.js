import React, { useCallback } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import Router from "next/router";

const HeadTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;
const TextSpan = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
`;
const Atag = styled.a`
    color: white;
`;

const SearchContainer = styled.div`
    display: flex;
`;

const SearchInput = styled.input`
    width: 150px;
    margin-right: 5px;
    margin-bottom: 10px;
    @media (max-width: 480px) {
        width: 100%;
    }
`;

const ListHeadTitle = () => {
    const user = useSelector((state) => state.user.user?.admin);

    const [searchData, onChangeSearchData] = useInput("");

    const onSearch = useCallback(() => {
        Router.push(`/hashtag/${searchData}`);
    }, [searchData]);

    return (
        <>
            <HeadTitle>
                <SearchContainer>
                    <SearchInput
                        value={searchData}
                        onChange={onChangeSearchData}
                        onKeyPress={onSearch}
                        placeholder="검색어 입력 후 엔터"
                    />
                </SearchContainer>
                {user === 9 ? (
                    <TextSpan>
                        <Link href="/board/write">
                            <Atag>글작성</Atag>
                        </Link>
                    </TextSpan>
                ) : (
                    <TextSpan>전체글</TextSpan>
                )}
            </HeadTitle>
        </>
    );
};
export default ListHeadTitle;
