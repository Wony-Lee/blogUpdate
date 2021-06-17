import React from "react";
import Link from "next/link";
import { Container, FlexSection, SectionItem } from "./style/styled";

const BlogPage = () => {
    return (
        <Container>
            <FlexSection>
                <SectionItem>
                    <Link href="/blog">
                        <a>TodoList</a>
                    </Link>
                    {/* <div style={{ border: "1px solid white" }}>1</div> */}
                </SectionItem>
                <SectionItem>
                    {/* <div style={{ border: "1px solid white" }}>1</div> */}
                </SectionItem>
                <SectionItem>
                    {/* <div style={{ border: "1px solid white" }}>1</div> */}
                </SectionItem>
                <SectionItem>
                    {/* <div style={{ border: "1px solid white" }}>1</div> */}
                </SectionItem>
                <SectionItem>
                    {/* <div style={{ border: "1px solid white" }}>1</div> */}
                </SectionItem>
                <SectionItem>
                    {/* <div style={{ border: "1px solid white" }}>1</div> */}
                </SectionItem>
                <SectionItem>
                    {/* <div style={{ border: "1px solid white" }}>1</div> */}
                </SectionItem>
                <SectionItem>
                    {/* <div style={{ border: "1px solid white" }}>1</div> */}
                </SectionItem>
            </FlexSection>
        </Container>
    );
};

export default BlogPage;
