import React, { useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducer/guest";

const CommentLayout = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const CommentsForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
`;

const CommentNameInput = styled.input`
    margin: 0px 10px;
    height: 30px;
    width: 200px;
    border: 0;
    outline: none;
    @media (max-width: 480px) {
        width: 50px;
    }
`;

const CommentInput = styled.input`
    border: 0px;
    width: 100%;
    height: 30px;
    outline: none;
    margin-right: 12px;
`;

const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const { addCommentDone, addCommentLoading } = useSelector(
        (state) => state.guest
    );
    const [commentName, onChangeCommentName, setCommentName] = useInput("");
    const [comment, onChangeComment, setComment] = useInput("");

    useEffect(() => {
        if (addCommentDone) {
            setComment("");
            setCommentName("");
        }
    }, [addCommentDone]);

    const onCommentSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch({
                type: ADD_COMMENT_REQUEST,
                data: {
                    commentName: commentName,
                    content: comment,
                    postId: post.id,
                },
            });
        },
        [comment, commentName]
    );

    return (
        <>
            <CommentLayout>
                <CommentsForm onSubmit={onCommentSubmit}>
                    <label htmlFor="commentName"></label>
                    <CommentNameInput
                        value={commentName}
                        onChange={onChangeCommentName}
                        maxLength="4"
                        id="commentName"
                        placeholder="Name"
            		required       
	    />
                    <label htmlFor="comment"></label>
                    <CommentInput
                        value={comment}
                        id="comment"
                        onChange={onChangeComment}
                        placeholder="Content"
            		required       
	    />
                    <button type="submit" style={{ border: "1px solid aqua" }}>
                        작성
                    </button>
                </CommentsForm>
            </CommentLayout>
        </>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;
