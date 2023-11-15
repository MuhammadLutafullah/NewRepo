import React from 'react'
import { Link } from 'react-router-dom';
import { Star } from 'phosphor-react';

import './TestimonialSection.scss'

function TestimonialCard(props) {
    return (
        <div className={`${props.CardClass} TestimonialCard_otr`}>
            <div className='TestimonialCard_inr'>
                <div className='content_otr'>
                    <p className='heading-l card_heading'>
                        {props.CardHeading}
                    </p>
                    <div className='profile_otr'>
                        <Link className='heading-mb profile_name'>
                            {props.profileName}
                        </Link>
                        <p className='heading-sm profile_designation'>{props.profileDesc}</p>
                    </div>
                    <ul className='star_ul'>
                        <li className='star_li'>
                            <Star size={20} weight="fill" />
                        </li>
                        <li className='star_li'>
                            <Star size={20} weight="fill" />
                        </li>
                        <li className='star_li'>
                            <Star size={20} weight="fill" />
                        </li>
                        <li className='star_li'>
                            <Star size={20} weight="fill" />
                        </li>
                        <li className='star_li'>
                            <Star size={20} weight="fill" />
                        </li>
                    </ul>
                </div>
                <Link className='img_otr'>
                    <img className='card_img' src={props.CardImg} alt='img' />
                </Link>
            </div>
        </div>
    )
}

export default TestimonialCard