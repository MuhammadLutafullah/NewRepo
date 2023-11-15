import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react';

import './TeamSection.scss'

function TeamCard(props) {
    return (
        <div className={`${props.CardClass} TeamCard_otr`}>
            <div className='TeamCard_inr'>
                <div className='img_otr'>
                    <img className='card_img' src={props.CardImg} alt='img' />
                    <div className='social_otr'>
                        <ul className='social_ul'>
                            <li className='social_li'>
                                <Link className='social_linkk'>
                                    <FacebookLogo size={24} />
                                </Link>
                            </li>
                            <li className='social_li'>
                                <Link className='social_linkk'>
                                    <InstagramLogo size={24} />
                                </Link>
                            </li>
                            <li className='social_li'>
                                <Link className='social_linkk'>
                                    <WhatsappLogo size={24} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content_otr'>
                    <p className='heading-sb user_name'>
                        {props.Name}
                    </p>
                    <p className='heading-sm user_post'>{props.Desc}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard