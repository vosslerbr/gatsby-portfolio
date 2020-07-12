import React from "react";
import Nav from '../components/nav';
import PageWrapper from "../components/pagewrapper";
import Title from "../components/title";

export default function Contact() {
    return (
        <div>
            <Nav />
            <PageWrapper>
                <Title name="Contact" />
                {/* <Bio /> */}
                {/* <Carousel/> */}
                {/* <Skills /> */}
            </PageWrapper>
        </div>
    );
}