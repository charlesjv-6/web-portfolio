import React, { useState, useEffect } from "react";
import Header from "../components/header";
import TopSeller from "../layouts/top-seller";
import Banner from "../components/banner";
import { imageArray } from "../scripts/static-data";

export default function Index() {
    const poemLines = [
        "Life's cruel game, unfair and unjust.",
        "Fate's hand dealt, in me it trusts.",
        "Fortune's favor, a whispered gust,",
        "Leaves others longing, in dust they must.",
        "Lucky stars dance, upon my sky,",
        "While others weep, with weary sigh.",
        "In shadows cast, they wonder why,",
        "Destiny's gaze, on me does lie.",
        "But in this tale of luck bestowed,",
        "I see the tears, in rivers flowed.",
        "For what I have, they're left out cold,",
        "In silent sorrow, their hearts are bowed.",
        "So let this poem, a truth proclaim,",
        "Life's uneven scales, bear no shame.",
        "For in my fortune, lies no aim,",
        "To leave others less, in sorrow's flame.",
        "Though luck may favor, a chosen few,",
        "Compassion's call, must ring anew.",
        "To lift the fallen, help them through,",
        "For in this journey, we're all askew.",
        "So though I'm blessed, and others not,",
        "In empathy's embrace, we find our lot.",
        "For in the unfairness, lessons taught,",
        "To share our luck, with all we've got.",
        ":D"
    ];

    const [lineIndex, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % poemLines.length);
        }, 5000);
    
        return () => clearInterval(interval);
    }, [poemLines.length]);

    return (
        <section className="index max-size">
            <Header headerTitle="Home"/>
            <Banner imageArray={imageArray}/>
            <div class="poem-container">
                <div class="poem">
                    {poemLines[lineIndex]}
                </div>
            </div> 
            <TopSeller />
        </section>
    );
}