import React from 'react'
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

import CtaBg from '../../img/cta-bg.png'

import './CtaSection.scss'

function CtaSection() {
    return (
        <section className='CtaSection_main'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='content_otr'>
                        <h2 className='heading-h2 cta_heading'>
                            Find Us Here. Make Real Results Happen.
                        </h2>
                        <p className='heading-mm cta_desc'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        <div className='action_main'>
                            <Link className="action_otr">
                                <ThemeBtn
                                    ButtonClass="light_btn"
                                    ButtonText="Shop Now"
                                />
                            </Link>
                        </div>
                    </div>
                    <img className='bg_img' src={CtaBg} alt='img' />
                </div>
            </div>
        </section>
    )
}

export default CtaSection