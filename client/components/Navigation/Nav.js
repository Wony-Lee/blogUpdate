import React from "react";
import Link from "next/link";
import { NavContainer, NavMenuLogo } from "../style/styled";
import NavMenu from "./NavMenu";

const NavLogo = () => {
    return (
        <>
            <NavContainer>
                <NavMenuLogo>
                    <Link href="/">
                        <a>NavLogo DevStudy</a>
                    </Link>
                </NavMenuLogo>
                <NavMenu />
            </NavContainer>
        </>
    );
};

export default NavLogo;
