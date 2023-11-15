import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Navigation, Autoplay } from "swiper"
import { Truck, ForkKnife, Pizza } from 'phosphor-react'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import './FeatureSection.scss'

import HeroImg1 from '../../img/hero-img1.png'
import HeroImg2 from '../../img/hero-img2.png'
import HeroImg3 from '../../img/hero-img3.png'
import HeroImg4 from '../../img/hero-img4.png'

function FeatureSection() {
    return (
        <section className='FeatureSection_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <h2 className='heading-h2 feature_heading'>
                                Our All Features
                            </h2>
                            <div className='cards_otr'>
                                <div className='card_inr'>
                                    <div className='icon_otr'>
                                        <Truck size={44} />
                                    </div>
                                    <div className='content_otr'>
                                        <p className='heading-lb card_heading'>
                                            Fast Delivery
                                        </p>
                                        <p className='heading-sm card_desc'>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                                        </p>
                                    </div>
                                </div>
                                <div className='card_inr'>
                                    <div className='icon_otr'>
                                        <ForkKnife size={44} />
                                    </div>
                                    <div className='content_otr'>
                                        <p className='heading-lb card_heading'>
                                            Fresh Products
                                        </p>
                                        <p className='heading-sm card_desc'>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                                        </p>
                                    </div>
                                </div>
                                <div className='card_inr'>
                                    <div className='icon_otr'>
                                        <Pizza size={44} />
                                    </div>
                                    <div className='content_otr'>
                                        <p className='heading-lb card_heading'>
                                            Great Pizza
                                        </p>
                                        <p className='heading-sm card_desc'>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col_lg-5 col_img_otr'>
                        <div className='col_img_inr'>
                            <Swiper
                                navigation={true}
                                effect={"fade"}
                                speed={3000}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, EffectFade, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img className='hero_img' src={HeroImg1} alt='img' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='hero_img' src={HeroImg2} alt='img' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='hero_img' src={HeroImg3} alt='img' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='hero_img' src={HeroImg4} alt='img' />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection