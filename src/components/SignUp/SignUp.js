import React from 'react'
import ThemeInput from '../ThemeInput/ThemeInput'
import CheckComponent from '../CheckComponent/CheckComponent'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import { GoogleLogo, FacebookLogo } from 'phosphor-react'
import SectionHeadDesc from '../SectionHeadDesc/SectionHeadDesc'

import './SignUp.scss';

function SignUp() {
    return (
        <div className='signup_page'>
            <section className='signup_section'>
                <div className='container'>
                    <SectionHeadDesc
                        Heading="Sign Up to Foodies"
                        Desc="Please signup to your Foodies account if you have one"
                    />
                    <div className='row row_custom'>
                        <div className='col-lg-7 col-md-8 col_form_otr'>
                            <form className='col_form_inr'>
                                <div className='other_signup'>
                                    <button className='heading-xsb signup_button'>
                                        <GoogleLogo size={24} />
                                        <span className='button_text'>
                                            signup With Google
                                        </span>
                                    </button>
                                    <button className='heading-xsb signup_button'>
                                        <FacebookLogo size={24} />
                                        <span className='button_text'>
                                            signup With Facebook
                                        </span>
                                    </button>
                                </div>
                                <div className='inputs_main'>
                                    <ThemeInput
                                        inputClass="White_Input input_form"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="First Name"
                                    />
                                    <ThemeInput
                                        inputClass="White_Input input_form"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="Last Name"
                                    />
                                </div>
                                <ThemeInput
                                    inputClass="White_Input input_form"
                                    inputType="text"
                                    inputName="text"
                                    inputPlaceholder="User Name"
                                />
                                <ThemeInput
                                    inputClass="White_Input input_form"
                                    inputType="email"
                                    inputName="email"
                                    inputPlaceholder="Email Address"
                                />
                                <ThemeInput
                                    inputClass="White_Input input_form"
                                    inputType="password"
                                    inputName="password"
                                    inputPlaceholder="Password"
                                />
                                <div className='check_Linkk'>
                                    <CheckComponent
                                        CheckText='I aceept the'
                                    />
                                    <p className='check_linkk'> <Link>Terms of Service</Link> & <Link>Privacy Policy</Link></p>
                                </div>
                                <ThemeBtn
                                    ButtonClass="primary_btn form_btn"
                                    ButtonText="Sign Up"
                                />
                                <p className='heading-sm signin_text'>
                                    Not registered yet? <Link className='text_linkk'>Create an account</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp