import React, { useCallback, useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import AppLayout from "../components/AppLayout";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import Link from "next/link";
import { SIGN_UP_REQUEST } from "../reducer/user";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import { LOAD_USER_INFO_REQUEST } from "../reducer/user";

const SignContainer = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    justify-content: center;
`;

const SignUpForm = styled.form`
    width: 100%;
    height: 500px;
    text-align: center;
`;

const TextLabel = styled.label`
    color: white;
    margin: 0;
    display: block;
`;

const CheckDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const CheckLabel = styled.label`
    color: white;
    @media (max-width: 480px) {
        font-size: 10pt;
    }
`;

const SignInput = styled.input`
    outline: none;
    margin-bottom: 20px;
`;

const ErrorDiv = styled.div`
    color: red;
    margin-bottom: 15px;
`;

const SignUp = () => {
    const dispatch = useDispatch();
    const { signUpLoading, signUpDone, signUpError, user } = useSelector(
        (state) => state.user
    );

    useEffect(() => {
        if (user && user.id) {
            Router.replace("/blog");
        }
    }, [user && user.id]);

    useEffect(() => {
        if (signUpDone) {
            Router.replace("/blog");
        }
    }, [signUpDone]);

    useEffect(() => {
        if (signUpError) {
            alert(signUpError);
        }
    }, [signUpError]);

    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [nickname, onChangeNickname] = useInput("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
        },
        [password]
    );

    const [term, setTerm] = useState("");
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (password !== passwordCheck) {
                return setPasswordError(true);
            }
            if (!term) {
                return setTermError(true);
            }
            dispatch({
                type: SIGN_UP_REQUEST,
                data: { email, password, nickname },
            });
        },
        [email, password, passwordCheck, term]
    );

    return (
        <>
            <AppLayout>
                <SignContainer>
                    <SignUpForm onSubmit={onSubmit}>
                        <div>
                            <TextLabel htmlFor="user-email">이메일</TextLabel>
                            <SignInput
                                type="email"
                                name="user-email"
                                value={email}
                                onChange={onChangeEmail}
                                required
                            />
                        </div>
                        <div>
                            <TextLabel htmlFor="user-password">
                                비밀번호
                            </TextLabel>
                            <SignInput
                                type="password"
                                name="user-password"
                                value={password}
                                onChange={onChangePassword}
                                required
                            />
                        </div>
                        <div>
                            <TextLabel htmlFor="user-password-check">
                                비밀번호 확인
                            </TextLabel>
                            <SignInput
                                type="password"
                                name="user-password-check"
                                value={passwordCheck}
                                onChange={onChangePasswordCheck}
                                required
                            />
                            {passwordError && (
                                <ErrorDiv>
                                    비밀번호가 일치하지않습니다.
                                </ErrorDiv>
                            )}
                        </div>
                        <div>
                            <TextLabel htmlFor="user-nickname">
                                닉네임
                            </TextLabel>
                            <SignInput
                                type="text"
                                name="user-nickname"
                                value={nickname}
                                onChange={onChangeNickname}
                                required
                            />
                        </div>
                        <CheckDiv>
                            <SignInput
                                type="checkbox"
                                name="user-term"
                                checked={term}
                                onChange={onChangeTerm}
                            />
                            <CheckLabel htmlFor="user-term">
                                가입동의
                            </CheckLabel>
                            {termError && (
                                <ErrorDiv>약관에 동의해주셔야 합니다.</ErrorDiv>
                            )}
                        </CheckDiv>
                        <div>
                            <button
                                type="submit"
                                style={{ margin: "10px" }}
                                onLoad={signUpLoading.toString}
                            >
                                가입하기
                            </button>
                            <Link href="/blog">
                                <a>
                                    <button type="reset">돌아가기</button>
                                </a>
                            </Link>
                        </div>
                    </SignUpForm>
                </SignContainer>
            </AppLayout>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        const cookie = context.req ? context.req.headers.cookie : "";
        axios.defaults.headers.Cookie = "";
        if (context.req && cookie) {
            axios.defaults.headers.Cookie = cookie;
        }
        context.store.dispatch({
            type: LOAD_USER_INFO_REQUEST,
        });

        context.store.dispatch(END);
        await context.store.sagaTask.toPromise();
    }
);

export default SignUp;
