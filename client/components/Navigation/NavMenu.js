import React, { useCallback } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../reducer/user";

import { NavMenuContainer } from "../style/styled";

const NavMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const onLogout = useCallback((e) => {
        e.preventDefault();
        dispatch(logoutRequestAction());
    });
    return (
        <>
            <NavMenuContainer>
                <div>
                    <Link href="/Study">
                        <a>Study</a>
                    </Link>
                </div>
                <div>
                    <Link href="/board">
                        <a>Board</a>
                    </Link>
                </div>
                <div>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </div>
                <div>
                    <Link href="/guest">
                        <a>Guests</a>
                    </Link>
                </div>
                <div>
                    {user ? (
                        <Link href="/logout">
                            <a onClick={onLogout}>로그아웃</a>
                        </Link>
                    ) : (
                        <Link href="/login">
                            <a>로그인</a>
                        </Link>
                    )}
                </div>
            </NavMenuContainer>
        </>
    );
};

export default NavMenu;
