import React from "react";
import Link from "next/link";

import { NavMenuContainer } from "../style/styled";

const NavMenu = () => {
    return (
        <>
            <NavMenuContainer>
                <div>
                    <Link href="/study">
                        <a>Study</a>
                    </Link>
                </div>
                <div>
                    <Link href="/guest">
                        <a>Guests</a>
                    </Link>
                </div>
                <div>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </div>
                <div>
                    <Link href="/board">
                        <a>Board</a>
                    </Link>
                </div>
                <div>
                    <Link href="/login">
                        <a>로그인</a>
                    </Link>
                </div>
            </NavMenuContainer>
        </>
    );
};

export default NavMenu;
