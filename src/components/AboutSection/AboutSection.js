import React from 'react'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import { CheckSquareOffset } from 'phosphor-react'

import './AboutSection.scss'

import AboutImg from '../../img/category-img2.png'

function AboutSection() {
    return (
        <section className='AboutSection_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-5 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='about_img' src={AboutImg} alt='img' />
                        </div>
                    </div>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <h2 className='heading-h2 about_heading'>
                                Enjoy an Exceptional Journey of Taste
                            </h2>
                            <p className='heading-m about_desc'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta explicabo.
                            </p>
                            <ul className='about_ul'>
                                <li className='about_li'>
                                    <CheckSquareOffset size={24} />
                                    <span className='heading-sm li_text'>
                                        Project Quality Management Plan
                                    </span>
                                </li>
                                <li className='about_li'>
                                    <CheckSquareOffset size={24} />
                                    <span className='heading-sm li_text'>
                                        The Ability to Delegate Tasks
                                    </span>
                                </li>
                                <li className='about_li'>
                                    <CheckSquareOffset size={24} />
                                    <span className='heading-sm li_text'>
                                        It might be a finished or unfinished
                                    </span>
                                </li>
                            </ul>
                            <Link className='action_otr'>
                                <ThemeBtn
                                    ButtonClass="primary_btn"
                                    ButtonText="Learn More"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection