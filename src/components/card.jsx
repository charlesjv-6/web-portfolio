import React from "react";
import PropTypes from "prop-types";
import { currencyFormatter } from "../scripts/util";
export default  function Card({ id, title, description, image, price, discountedPrice }){
    // make sure the description is not too long
    if (description.length > 60) { 
        description = description.slice(0, 60) + '...'; 
    }

    // format price using the currency formatter
    const formattedPrice = currencyFormatter.format(price);
    const formattedDiscountedPrice = currencyFormatter.format(discountedPrice);

    // handle card click
    const handleCardClick = () => {
        window.location.href = `/web-portfolio/product-detail?id=${id}`;
    }

    // return the card element
    return(
        <div className="card" onClick={()=>handleCardClick()}>
            <header>
                <h3>{ title.toUpperCase() }</h3>
                { price > 0 && discountedPrice > 0 && 
                    <span className="price-tag"><p>{formattedPrice}</p><p>{formattedDiscountedPrice}</p></span>
                }
            </header>
            <img className="max-size" src={image} alt={title} />
            <footer>
                <p>{ description }</p>
            </footer>
        </div>
    )
}

// define the props type
Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    price: PropTypes.number,
    discountedPrice: PropTypes.number
};

// define the default values of the props
Card.defaultProps = {
    title: 'Title',
    description: 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Cum sociis natoque penatibus',
    image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
    price: 0,
    discountedPrice: 0
};