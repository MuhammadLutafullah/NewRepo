import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'

import './BlogSection.scss'

function BlogCard(props) {
    return (
        <div className={`${props.CardClass} BlogCard_otr`}>
            <div className='BlogCard_inr'>
                <Link className='img_otr' to="/blog_details">
                    <img className='card_img' src={props.CardImg} alt='img' />
                </Link>
                <div className='content_otr'>
                    <p className='heading-sm date_text'>{props.CardDate}</p>
                    <Link className='heading-mb card_heading' to="/blog_details">{props.CardHeading}</Link>
                    <Link className='heading-xxsb read_more' to="/blog_details">
                        <span>Read More</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard