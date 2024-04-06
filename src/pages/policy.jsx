import React from "react";
import Header from "../components/header";

export default function Policy() {
    return (
        <section className="policy">
            <Header headerTitle={'Policy'} />
            <main>
                <h2>Refund Policy</h2>
                <p>We appreciate your interest in our products and services. Please take note of our refund policy outlined below:</p>
                <ol>
                    <li><strong>Refunds:</strong> We regret to inform you that we do not offer refunds for any purchases made. All sales are final.</li>
                    <li><strong>Cancellation:</strong> Once an order is placed and processed, it cannot be cancelled or refunded.</li>
                    <li><strong>Exchanges:</strong> We do not offer exchanges for products purchased. Please ensure you carefully review all product details before making a purchase.</li>
                    <li><strong>Damaged or Defective Products:</strong> In the unlikely event that you receive a damaged or defective product, please contact us immediately for assistance. We will work with you to resolve the issue promptly.</li>
                </ol>
                <h2>Commissions Policy</h2>
                <p>We welcome commission requests for professional services such as web design, graphic design, and content creation.</p>
                <ol>
                    <li><strong>Commission Requests:</strong> We welcome commission requests for professional services such as web design, graphic design, and content creation.</li>
                    <li><strong>Consultation:</strong> Before proceeding with any commissioned work, we offer a consultation session to discuss your requirements, expectations, and project scope.</li>
                    <li><strong>Agreement:</strong> Upon agreement of the project scope and terms, a contract outlining the details, including deliverables, timelines, and compensation, will be provided for review and signature.</li>
                    <li><strong>Payment:</strong> A deposit may be required before commencement of the project. Final payment is due upon completion and delivery of the commissioned work.</li>
                    <li><strong>Revisions:</strong> Depending on the project scope, a certain number of revisions may be included in the commission fee. Additional revisions may be subject to extra charges.</li>
                    <li><strong>Intellectual Property:</strong> Upon full payment, the client will have full ownership of the commissioned work. However, we reserve the right to showcase the work in our portfolio or promotional materials unless otherwise agreed upon.</li>
                    <li><strong>Cancellation:</strong> In the event of project cancellation by the client, any work completed up to that point will be billed accordingly.</li>
                </ol>
            </main>
        </section>
    )
}