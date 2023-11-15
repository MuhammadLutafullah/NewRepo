import React from 'react'
import BannerCard from './BannerCard'

import './BannerSection.scss'

import CardBg1 from '../../img/category-img1.png'
import CardBg2 from '../../img/category-img2.png'
import CardBg3 from '../../img/category-img3.png'
import CardBg4 from '../../img/category-img4.png'
import CardBg5 from '../../img/category-img5.png'
import CardBg6 from '../../img/category-img6.png'

function BannerSection() {
    return (
        <section className='BannerSection_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <BannerCard
                        CardClass="col-lg-4 col-md-6"
                        CardBg={CardBg1}
                        CardHeading="Most Popular Pizza"
                    />
                    <BannerCard
                        CardClass="col-lg-4 col-md-6"
                        CardBg={CardBg2}
                        CardHeading="Most Popular Pizza"
                    />
                    <BannerCard
                        CardClass="col-lg-4 col-md-6"
                        CardBg={CardBg3}
                        CardHeading="Most Popular Pizza"
                    />
                    <BannerCard
                        CardClass="col-lg-4 col-md-6"
                        CardBg={CardBg4}
                        CardHeading="Most Popular Pizza"
                    />
                    <BannerCard
                        CardClass="col-lg-4 col-md-6"
                        CardBg={CardBg5}
                        CardHeading="Most Popular Pizza"
                    />
                    <BannerCard
                        CardClass="col-lg-4 col-md-6"
                        CardBg={CardBg6}
                        CardHeading="Most Popular Pizza"
                    />
                </div>
            </div>
        </section>
    )
}

export default BannerSection