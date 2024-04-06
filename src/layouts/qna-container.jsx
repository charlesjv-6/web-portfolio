import React from "react";
import QnA from "../components/question-and-answer";

export default function FAQContainer() {
    const faqData = [
        { question: 'Do you do refund?', answer: 'No.' },
        { question: 'Do you accept commissions?', answer: 'It depends.' },
        { question: 'who cares?', answer: 'not me' },
        { question: 'My question is not listed here', answer: 'Welp, sucks to be you.' },
        { question: 'How are you so handsome?', answer: 'Because...' },
        { question: 'How do I enable light mode?', answer: 'fuck light mode.' },
    ]
    return (
        <section>
            { faqData &&
                faqData.map((data, index) => {
                    return <QnA key={`qna-${index}`} question={data.question} answer={data.answer} />
                })
            }
        </section>
    );
}