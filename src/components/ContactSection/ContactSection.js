import React from 'react'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import ThemeInput from '../ThemeInput/ThemeInput'
import { FacebookLogo, TwitterLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react';

import './ContactSection.scss'

function ContactSection() {
    return (
        <section className='ContactSection_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <h2 className='heading-h2 contact_heading'>
                                Find Us Here. Make Real Results Happen.
                            </h2>
                            <p className='heading-mm contact_desc'>
                                There are many variations of passages of orem Ipsum available, but the majority have suffered alteration in some form, by cted ipsumlor sit amet, consectetur adipisicing elit, sed do usmod temp idunt ut labore et dolore magna aliqua ut enim ad minim.
                            </p>
                            <div className='action_otr'>
                                <Link className='action_inr'>
                                    <ThemeBtn
                                        ButtonClass="border_btn"
                                        ButtonText="Book An Table"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col_form_otr'>
                        <form className='col_form_inr'>
                            <ThemeInput
                                inputClass="White_Input"
                                inputType="name"
                                inputName="name"
                                inputPlaceholder="Your Name"
                            />
                            <ThemeInput
                                inputClass="White_Input"
                                inputType="email"
                                inputName="email"
                                inputPlaceholder="Your Email"
                            />
                            <ThemeInput
                                inputClass="White_Input"
                                inputType="number"
                                inputName="number"
                                inputPlaceholder="Your Number"
                            />
                            <textarea className='White_Input text_area' name="subject" placeholder='Your Subject' />
                            <div className='action'>
                                <ThemeBtn
                                    ButtonClass="primary_btn"
                                    ButtonText="Send Now"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ul className='social_ul'>
                <li className='social_li'>
                    <Link className='social_linkk'>
                        <FacebookLogo size={24} />
                    </Link>
                </li>
                <li className='social_li'>
                    <Link className='social_linkk'>
                        <TwitterLogo size={24} />
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
        </section>
    )
}

export default ContactSection