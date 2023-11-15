import React from 'react'
import { Link } from 'react-router-dom'

import './BannerSection.scss'

function BannerCard(props) {
    return (
        <div className={`${props.CardClass} BannerCard_otr`}>
            <div className='BannerCard_inr'>
                <Link className='img_otr'>
                    <img className='card_bg' src={props.CardBg} alt='img' />
                </Link>
                <div className='content_otr'>
                    <Link className='heading-h3 card_heading'>
                        {props.CardHeading}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BannerCard