import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import board from "../../../server/models/board";
import { addBoard } from "../../reducer/board";

const SearchForm = styled.div`
    margin-bottom: 30px;
`;

const SearchInput = styled.input`
    border: 1px solid black;
    width: 100%;
`;
const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    // const { boardPost } = useSelector((state) => state.board);
    const onKeyEvent = (e) => {
        if (e.key === "Enter") {
            console.log(e.currentTarget.value);
            setSearchInput("");
        }
    };
    const searchHandler = (e) => {
        setSearchInput(e.currentTarget.value);
        props.searchData(e.currentTarget.value);
        // console.log("props==>", props.searchData);
    };
    return (
        <>
            <SearchForm>
                <label htmlFor="searchData"></label>
                <SearchInput
                    name="searchData"
                    type="text"
                    value={searchInput}
                    placeholder="검색어 입력 후 엔터"
                    onKeyPress={onKeyEvent}
                    onChange={searchHandler}
                />
            </SearchForm>
        </>
    );
};

export default SearchBar;
