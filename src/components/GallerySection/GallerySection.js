import React, { useState } from 'react'
import GalleryCard from './GalleryCard'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Navigation, Autoplay } from "swiper"
import { X } from 'phosphor-react'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import './GallerySection.scss'

import CategoryImg1 from '../../img/category-img1.png'
import CategoryImg2 from '../../img/category-img2.png'
import CategoryImg3 from '../../img/category-img3.png'
import CategoryImg4 from '../../img/category-img4.png'
import CategoryImg5 from '../../img/category-img5.png'
import CategoryImg6 from '../../img/category-img6.png'
import SectionHeadDesc from '../SectionHeadDesc/SectionHeadDesc'

function GallerySection() {
    const [gallerymodal, setgallerymodal] = useState(false)
    const openModal = () => {
        setgallerymodal(true)
    }
    const closeModal = () => {
        setgallerymodal(false)
    }
    return (
        <>
            <section className='GallerySection_main'>
                <div className='container'>
                    <SectionHeadDesc
                        Heading="Gallery"
                        Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                    <div className='row row_custom'>
                        <GalleryCard
                            CardClick={openModal}
                            CardImg={CategoryImg1}
                        />
                        <GalleryCard
                            CardClick={openModal}
                            CardImg={CategoryImg2}
                        />
                        <GalleryCard
                            CardClick={openModal}
                            CardImg={CategoryImg3}
                        />
                        <GalleryCard
                            CardClick={openModal}
                            CardImg={CategoryImg4}
                        />
                        <GalleryCard
                            CardClick={openModal}
                            CardImg={CategoryImg5}
                        />
                        <GalleryCard
                            CardClick={openModal}
                            CardImg={CategoryImg6}
                        />
                    </div>
                </div>
            </section>
            <div className={gallerymodal ? 'gallery_modal_main gallery_modal_active' : 'gallery_modal_main'}>
                <div className='modal_bg'></div>
                <div className='modal_content_otr'>
                    <div className='modal_content'>
                        <div className='close_otr' onClick={closeModal}>
                            <X size={24} />
                        </div>
                        <Swiper
                            navigation={true}
                            effect={"fade"}
                            speed={2000}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, EffectFade, Navigation]}
                            className="mySwiper gallery_slider"
                        >
                            <SwiperSlide>
                                <img className='slider_img' src={CategoryImg1} alt='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider_img' src={CategoryImg2} alt='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider_img' src={CategoryImg3} alt='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider_img' src={CategoryImg4} alt='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider_img' src={CategoryImg5} alt='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider_img' src={CategoryImg6} alt='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider_img' src={CategoryImg1} alt='img' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='slider_img' src={CategoryImg2} alt='img' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GallerySection