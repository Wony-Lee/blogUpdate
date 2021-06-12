import React, { useCallback, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "@emotion/styled";
import { loginRequestAction, logoutRequestAction } from "../reducer/user";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";

const LoginLayout = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background: white;
    height: 500px;
    @media (max-width: 480px) {
        height: 300px;
    }
`;
const LoginForm = styled.form`
    margin-top: 5%;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (max-width: 480px) {
        width: 100%;
    }
`;

const LoginTableForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const LoginTable = styled.table`
    width: 350px;
    height: 150px;
    @media (max-width: 480px) {
        width: 100%;
    }
`;

const LoginComponents = () => {
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");
    const { logInDone, loginLoading } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (logInDone) {
            Router.replace("/");
        }
    }, [logInDone]);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();

            dispatch(loginRequestAction({ email, password }));
        },
        [email, password]
    );

    return (
        <>
            <LoginLayout>
                <LoginForm onSubmit={onSubmit}>
                    <h1>로그인</h1>
                    <LoginTableForm>
                        <LoginTable>
                            <tbody>
                                <tr>
                                    <td>이메일</td>
                                    <td>
                                        <input
                                            id="user-id"
                                            value={email}
                                            onChange={onChangeEmail}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>비밀번호</td>
                                    <td>
                                        <input
                                            type="password"
                                            id="user-password"
                                            value={password}
                                            onChange={onChangePassword}
                                            required
                                        />
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button
                                            type="submit"
                                            loading={loginLoading}
                                        >
                                            로그인
                                        </button>
                                    </td>
                                    <td>
                                        <Link href="/signup">
                                            <a>
                                                <button>회원가입</button>
                                            </a>
                                        </Link>
                                    </td>
                                </tr>
                            </tfoot>
                        </LoginTable>
                    </LoginTableForm>
                </LoginForm>
            </LoginLayout>
        </>
    );
};

export default LoginComponents;
