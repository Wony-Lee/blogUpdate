import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const HashTagContainer = styled.div`
    & a {
        color: white;
        text-decoration: none;
    }
    & a:hover {
        color: pink;
    }
`;

const BoardContent = ({ boardData }) => {
    return (
        <>
            <HashTagContainer>
                {boardData.split(/(#[^\s#]+)/g).map((v, i) => {
                    if (v.match(/(#[^\s#]+)/)) {
                        return (
                            <Link href={`/hashtag/${v.slice(1)}`} key={i}>
                                <a>{v}</a>
                            </Link>
                        );
                    }
                    return v;
                })}
            </HashTagContainer>
        </>
    );
};

BoardContent.propTypes = {
    boardData: PropTypes.string.isRequired,
};

export default BoardContent;
