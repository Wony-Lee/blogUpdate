import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import moment from "moment";
const CardForm = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const CardArea = styled.div`
    width: 90%;
    border: 1px solid white;
`;

const CardTitle = styled.div`
    border-bottom: 1px solid white;
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;
`;

const CardSpan = styled.div`
    color: white;
    margin-left: 10px;
    margin-right: 5px;
`;

const CardContent = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    background: white;
    height: 120px;
    padding: 10px;
`;

const CardFooter = styled.div`
    border-top: 1px solid white;
    border-bottom: 1px solid #ddd;
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: flex-end;
`;

const DeleteButton = styled.button`
    color: red;
    margin-left: 10px;
    margin-right: 20px;
`;
const CommentItem = styled.div`
    width: 95%;
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    color: white;
`;
const ListForm = styled.div`
    width: 95%;
    display: flex;
    padding: 5px;
    color: white;
`;
const ListUl = styled.ul`
    margin: 0px;
    padding: 0;
    list-style: none;
`;
const NameList = styled.li`
    padding-top: 5px;
    padding-bottom: 5px;
`;
const NameSpan = styled.span`
    margin-bottom: 15px;
    margin-right: 20px;
    color: white;
`;

const DateForm = styled.div`
    position: absolute;
    right: 0;
    font-size: 10pt;
`;

const OpenComments = styled.div`
    color: white;
    @media (max-width: 480px) {
        font-size: 10pt;
    }
`;

moment.locale("ko");

const PostCard = ({ post }) => {
    const user = useSelector((state) => state.user.user?.admin);
    const [openComment, setOpenComment] = useState("");
    const onToggleComment = useCallback((e) => {
        setOpenComment((prev) => !prev);
    }, []);

    return (
        <>
            <CardForm>
                <CardArea>
                    <CardTitle>
                        <CardSpan>이름</CardSpan>
                        <CardSpan> {post.guestname}</CardSpan>
                        <DateForm>
                            <CardSpan>작성일</CardSpan>
                            <CardSpan>
                                {moment(post.createdAt).format(
                                    "YYYY-MM-DD HH-mm"
                                )}
                            </CardSpan>
                        </DateForm>
                    </CardTitle>
                    <CardContent>{post.content}</CardContent>

                    <CardFooter>
                        {user === 9 ? (
                            <>
                                <DeleteButton>삭제</DeleteButton>
                            </>
                        ) : (
                            <></>
                        )}
                        <OpenComments onClick={onToggleComment}>
                            댓글
                        </OpenComments>
                    </CardFooter>
                    {openComment && (
                        <div>
                            <CommentItem>
                                {" "}
                                {`${post.Comments.length}개의 댓글`}
                            </CommentItem>
                            <CommentForm post={post} />
                            <ListForm>
                                <ListUl>
                                    {post.Comments.map((item, comment) => (
                                        <NameList key={comment}>
                                            <NameSpan>
                                                {item.commentName}{" "}
                                            </NameSpan>
                                            <NameSpan>{item.content}</NameSpan>
                                        </NameList>
                                    ))}
                                </ListUl>
                            </ListForm>
                        </div>
                    )}
                </CardArea>
            </CardForm>
        </>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createAt: PropTypes.string,
        Comments: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostCard;
