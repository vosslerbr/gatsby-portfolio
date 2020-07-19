import React from "react";
import Nav from '../components/nav';
import PageWrapper from "../components/pagewrapper";
import Title from "../components/title";
import ContactLeft from "../components/contact-left";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

export default function Contact() {
    return (
        <div>
            <Nav />
            <PageWrapper>
                <Title name="Contact" />
                <div style={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap`, justifyContent: `space-between` }}>
                    <ContactLeft />
                    <ContactForm />
                </div>
            </PageWrapper>
            <Footer />
        </div>
    );
}