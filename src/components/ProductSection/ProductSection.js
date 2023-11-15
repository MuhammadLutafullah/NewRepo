import React from 'react'
import ProductData from '../ProductCard/ProductData';
import ProductCard from '../ProductCard/ProductCard';
import SectionHeadDesc from '../SectionHeadDesc/SectionHeadDesc';

import './ProductSection.scss'

function ProductSection() {
    return (
        <div className='ProductSection_main'>
            <div className='container'>
                <SectionHeadDesc
                    Heading="Checkout Our Menu"
                    Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <div className='row row_custom'>
                    {ProductData.map((val) => {
                        return (
                            <ProductCard
                                ProductCardClass='col-md-4 col-sm-6'
                                key={val.id}
                                CardImg={val.CardImg}
                                TagText={val.TagText}
                                CardHeading={val.CardHeading}
                                RealPrice={val.RealPrice}
                                prePrice={val.prePrice}
                                ProductReview={val.ProductReview}
                                CardProductDesc={val.CardProductDesc}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductSection