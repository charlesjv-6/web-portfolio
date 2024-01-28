import React from "react";
import PropTypes from "prop-types";
import Card from "../components/card";

export default function CardContainer({ containerTitle, cardDataArray }) {
    // return the card container element
    return (
        <section className="card-container">
            <h2>{containerTitle.toUpperCase()}</h2>
            <div className="card-grid">
                { cardDataArray.length > 0 &&
                    cardDataArray.map((cardData, index) => {
                        return <Card key={index} title={cardData.title} description={cardData.description} image={cardData.image} price={cardData.price} discountedPrice={cardData.discountedPrice}/>
                    })
                }
            </div>
        </section>
    );
}

// define the props type
CardContainer.propTypes = {
    containerTitle: PropTypes.string,
    cardDataArray: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            image: PropTypes.string,
        })
    ).isRequired
};

// define the default values of the props
CardContainer.defaultProps = {
    containerTitle: '',
    cardDataArray: []
};