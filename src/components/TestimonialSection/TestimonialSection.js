import React from 'react'
import TestimonialCard from './TestimonialCard'
import SectionHeadDesc from '../SectionHeadDesc/SectionHeadDesc'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'

import './TestimonialSection.scss'

import ProfileImg1 from '../../img/profile-img1.png'
import ProfileImg2 from '../../img/profile-img2.png'
import ProfileImg3 from '../../img/profile-img3.png'
import ProfileImg4 from '../../img/profile-img4.png'

function TestimonialSection() {
    return (
        <section className='TestimonialSection_main'>
            <div className='container'>
                <SectionHeadDesc
                    Heading="Our Testimonial"
                    Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <div className='row row_custom'>
                    <TestimonialCard
                        CardClass="col-lg-6"
                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                        profileName="Usman Ali"
                        profileDesc="Marketing"
                        CardImg={ProfileImg1}
                    />
                    <TestimonialCard
                        CardClass="col-lg-6"
                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                        profileName="Shahzaib"
                        profileDesc="Marketing"
                        CardImg={ProfileImg2}
                    />
                    <TestimonialCard
                        CardClass="col-lg-6"
                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                        profileName="Rehman Ahmed"
                        profileDesc="Marketing"
                        CardImg={ProfileImg3}
                    />
                    <TestimonialCard
                        CardClass="col-lg-6"
                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                        profileName="Usman Ali"
                        profileDesc="Marketing"
                        CardImg={ProfileImg4}
                    />
                </div>
                <div className='action_main'>
                    <Link className='action-otr'>
                        <ThemeBtn
                            ButtonClass="primary_btn"
                            ButtonText="Load More"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection