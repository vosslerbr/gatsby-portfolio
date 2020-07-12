import React from "react";
import Nav from '../components/nav';
import PageWrapper from "../components/pagewrapper";
import Title from "../components/title";

export default function Projects() {
    return (
        <div>
            <Nav />
            <PageWrapper>
                <Title name="Projects" />
                {/* <Bio /> */}
                {/* <Carousel/> */}
                {/* <Skills /> */}
            </PageWrapper>
        </div>
    );
}