import React from "react";
import Link from "next/link";

import { Section } from "./style/styled";

const FirstPage = () => {
    return (
        <>
            <Section>
                <Link href="/blog">
                    <a>블로기 보기</a>
                </Link>
            </Section>
        </>
    );
};

export default FirstPage;
