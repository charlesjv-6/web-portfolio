import React from "react";
import ImageViewer from "../components/image-viewer";
import { currencyFormatter, isNew } from "../scripts/util";

export default function DetailContainer({ product }){
    const { title, imageArray, discountedPrice, description, tags, dateAdded, shortDescription } = product;

    // format price using the currency formatter
    const formattedPrice = currencyFormatter.format(discountedPrice);

    return(
        <div className="detail-container">
            <h2>{ title.toUpperCase() }</h2>
            <section className="detail-section">
                <ImageViewer imageArray={imageArray}/>
                <div className="details">
                    <h3> {shortDescription.toUpperCase()} </h3>
                    <div>
                        { discountedPrice > 0 && 
                            <span>
                                {
                                    isNew(dateAdded) && <p style={{backgroundColor: 'var(--new)', color: 'var(--bg-color)'}}>NEW</p>
                                }
                                <p style={{backgroundColor: 'var(--price)'}}>{formattedPrice}</p>
                                {
                                    tags.map(tag => {
                                        return <p>{ tag.toUpperCase() }</p>
                                    })
                                }
                            </span>
                        }
                    </div>
                    <div className="long-description" dangerouslySetInnerHTML={{ __html: `${ description }` }} />
                </div>
            </section>
        </div>
    )
}

DetailContainer.defaultProps = {
    product: {
        title: 'PRODUCT TITLE',
        discountedPrice: 50,
        tags: [
            'Tag 1',
            'Tag 2',
            'Tag 3'
        ],
        imageArray: [
            'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
            'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
            'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
            'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
        ],
        description: '<b>Lorem</b> ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, placeat iste! Consectetur optio aspernatur rem recusandae fugiat. Vitae excepturi facilis quis repudiandae sed, amet error alias, iste inventore, praesentium facere.',
        dateAdded: '2023-04-01',
        shortDescription: 'Lorem ipsum dolor'
    }
};