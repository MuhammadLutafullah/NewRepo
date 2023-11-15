import React from 'react'
import BlogCard from './BlogCard'
import SectionHeadDesc from '../SectionHeadDesc/SectionHeadDesc'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'

import './BlogSection.scss'

import CardImg1 from '../../img/category-img1.png'
import CardImg2 from '../../img/category-img2.png'
import CardImg3 from '../../img/category-img3.png'
import CardImg4 from '../../img/category-img4.png'

function BlogSection() {
    return (
        <section className='BlogSection_main'>
            <div className='container'>
                <SectionHeadDesc
                    Heading="Our Blog"
                    Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <div className='row row_custom'>
                    <BlogCard
                        CardClass="col-lg-3 col-md-4 col-sm-6"
                        CardImg={CardImg1}
                        CardDate="April 19, 2022"
                        CardHeading="Colour Spicy to Spring in Your Table"
                    />
                    <BlogCard
                        CardClass="col-lg-3 col-md-4 col-sm-6"
                        CardImg={CardImg2}
                        CardDate="April 19, 2022"
                        CardHeading="Colour Spicy to Spring in Your Table"
                    />
                    <BlogCard
                        CardClass="col-lg-3 col-md-4 col-sm-6"
                        CardImg={CardImg3}
                        CardDate="April 19, 2022"
                        CardHeading="Colour Spicy to Spring in Your Table"
                    />
                    <BlogCard
                        CardClass="col-lg-3 col-md-4 col-sm-6"
                        CardImg={CardImg4}
                        CardDate="April 19, 2022"
                        CardHeading="Colour Spicy to Spring in Your Table"
                    />
                </div>
                <div className='action_main'>
                    <Link className='action-otr'>
                        <ThemeBtn
                            ButtonClass="light_btn"
                            ButtonText="Load More"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BlogSection