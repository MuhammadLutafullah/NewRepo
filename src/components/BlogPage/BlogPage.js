import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import SectionHeadDesc from '../SectionHeadDesc/SectionHeadDesc'
import BlogCard from '../BlogSection/BlogCard'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'

import './BlogPage.scss'

import CardImg1 from '../../img/category-img1.png'
import CardImg2 from '../../img/category-img2.png'
import CardImg3 from '../../img/category-img3.png'
import CardImg4 from '../../img/category-img4.png'
import CardImg5 from '../../img/category-img5.png'
import CardImg6 from '../../img/category-img6.png'

function BlogPage() {
    return (
        <div className='BlogPage_main'>
            <InnerHeader
                Heading="Blog"
            />
            <div className='blog_main'>
                <div className='container'>
                    <SectionHeadDesc
                        Heading="Our Blog"
                        Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                    <div className='row row_custom'>
                        <BlogCard
                            CardClass="col-lg-3"
                            CardImg={CardImg1}
                            CardDate="April 19, 2022"
                            CardHeading="Colour Spicy to Spring in Your Table"
                        />
                        <BlogCard
                            CardClass="col-lg-3"
                            CardImg={CardImg2}
                            CardDate="April 19, 2022"
                            CardHeading="Colour Spicy to Spring in Your Table"
                        />
                        <BlogCard
                            CardClass="col-lg-3"
                            CardImg={CardImg3}
                            CardDate="April 19, 2022"
                            CardHeading="Colour Spicy to Spring in Your Table"
                        />
                        <BlogCard
                            CardClass="col-lg-3"
                            CardImg={CardImg4}
                            CardDate="April 19, 2022"
                            CardHeading="Colour Spicy to Spring in Your Table"
                        />
                        <BlogCard
                            CardClass="col-lg-3"
                            CardImg={CardImg5}
                            CardDate="April 19, 2022"
                            CardHeading="Colour Spicy to Spring in Your Table"
                        />
                        <BlogCard
                            CardClass="col-lg-3"
                            CardImg={CardImg6}
                            CardDate="April 19, 2022"
                            CardHeading="Colour Spicy to Spring in Your Table"
                        />
                        <BlogCard
                            CardClass="col-lg-3"
                            CardImg={CardImg1}
                            CardDate="April 19, 2022"
                            CardHeading="Colour Spicy to Spring in Your Table"
                        />
                        <BlogCard
                            CardClass="col-lg-3"
                            CardImg={CardImg2}
                            CardDate="April 19, 2022"
                            CardHeading="Colour Spicy to Spring in Your Table"
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
            </div>
        </div>
    )
}

export default BlogPage