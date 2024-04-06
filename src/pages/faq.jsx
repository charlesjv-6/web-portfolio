import React from "react";
import Header from "../components/header";
import FAQContainer from "../layouts/qna-container";

export default function FAQ() {
    return (
        <section className="faq">
            <Header headerTitle={'Frequently Asked Questions'} />
            <FAQContainer />
        </section>
    )
}