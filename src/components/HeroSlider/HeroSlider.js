import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Navigation, Autoplay } from "swiper"
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import './HeroSlider.scss'

import HeadingIcon1 from '../../img/food-shape1.png'
import HeadingIcon2 from '../../img/food-shape2.png'
import HeroImg1 from '../../img/hero-img1.png'
import HeroImg2 from '../../img/hero-img2.png'
import HeroImg3 from '../../img/hero-img3.png'
import HeroImg4 from '../../img/hero-img4.png'

function HeroSlider() {
    return (
        <div className='HeroSlider_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <h1 className='hero_heading heading-h1'>
                                Enjoy Delicious Food <span><img className='heading_icon' src={HeadingIcon1} alt='icon' /><img className='heading_icon' src={HeadingIcon2} alt='icon' /></span> In Your Healthy Life
                            </h1>
                            <p className='hero_desc heading-l'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <div className='action_otr'>
                                <Link className='explore_otr'>
                                    <ThemeBtn
                                        ButtonClass="primary_btn"
                                        ButtonText="Shop Now"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col_lg-6 col_img_otr'>
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
        </div>
    )
}

export default HeroSlider