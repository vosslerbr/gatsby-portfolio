import React from "react";
import Nav from '../components/nav';
import PageWrapper from "../components/pagewrapper";
import Title from "../components/title";

export default function About() {
    return (
        <div>
            <Nav />
            <PageWrapper>
                <Title name="About" />
                {/* <Bio /> */}
                {/* <Carousel/> */}
                {/* <Skills /> */}
            </PageWrapper>
        </div>
    );
}