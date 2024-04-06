import React from "react";
import { useLocation } from 'react-router-dom';

import Header from "../components/header";
import CardContainer from "../layouts/card-container";
import { sampleData } from "../scripts/static-data";

export default function Offers() {
    const { search } = useLocation();
    const type = new URLSearchParams(search).get('type');

    function getRelatedItems(tags) {
        return sampleData.filter(product => {
            return tags.some(tag => product.tags.includes(tag));
        });
    }

    function getTags() {
        let tags = {};
        if( type === 'students') {
            tags = {
                list1: ['School Project'],
                list2: ['School Activity']
            }
        } else if( type === 'business'){
            tags = {
                list1: ['PHP'],
                list2: ['NodeJS', 'ReactJS']
            }
        } else {
            tags = {
                list1: ['Custom Website'],
                list2: ['Custom Software']
            }
        }
        return tags;
    }

    const offers1 = getRelatedItems(getTags().list1);
    const offers2 = getRelatedItems(getTags().list2);

    const headerTitle = ()=> type === "students" ? "Student Helper" : type === "business" ? "Business Solutions" : "Custom Websites/Softwares";

    const cardContainerTitle1 = ()=> type === "students" ? "School Projects" : type === "business" ? "[PHP] Web Systems" : "Custom Websites";
    const cardContainerTitle2 = ()=> type === "students" ? "School Activities" : type === "business" ? "[Node/React] Web Systems/Sites" : "Custom Softwares";

    return (
        <section className="offers">
            <Header headerTitle={headerTitle()} />
            <CardContainer containerTitle={cardContainerTitle1()} cardDataArray={offers1}/>
            <CardContainer containerTitle={cardContainerTitle2()} cardDataArray={offers2}/>
        </section>
    );
}
