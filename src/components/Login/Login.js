import React from 'react'
import ThemeInput from '../ThemeInput/ThemeInput'
import CheckComponent from '../CheckComponent/CheckComponent'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import { GoogleLogo, FacebookLogo } from 'phosphor-react'

import './Login.scss';
import SectionHeadDesc from '../SectionHeadDesc/SectionHeadDesc'

function Login() {
    return (
        <div className='login_page'>
            <section className='login_section'>
                <div className='container'>
                    <SectionHeadDesc
                        Heading="Login to Foodies"
                        Desc="Please login to your Foodies account if you have one"
                    />
                    <div className='row row_custom'>
                        <div className='col-lg-7 col-md-8 col_form_otr'>
                            <form className='col_form_inr'>
                                <div className='other_login'>
                                    <button className='heading-xsb login_button'>
                                        <GoogleLogo size={24} />
                                        <span className='button_text'>
                                            Login With Google
                                        </span>
                                    </button>
                                    <button className='heading-xsb login_button'>
                                        <FacebookLogo size={24} />
                                        <span className='button_text'>
                                            Login With Facebook
                                        </span>
                                    </button>
                                </div>
                                <ThemeInput
                                    inputClass="White_Input input_form"
                                    inputType="email"
                                    inputName="email"
                                    inputPlaceholder="Username or Email Address"
                                />
                                <ThemeInput
                                    inputClass="White_Input input_form"
                                    inputType="password"
                                    inputName="password"
                                    inputPlaceholder="Password"
                                />
                                <div className='forget_otr'>
                                    <CheckComponent
                                        CheckText="Remember Me"
                                    />
                                    <Link className='heading-sm forget_text'>
                                        Forgot Password?
                                    </Link>
                                </div>
                                <ThemeBtn
                                    ButtonClass="primary_btn form_btn"
                                    ButtonText="Login"
                                />
                                <p className='heading-sm signin_text'>
                                    Don’t have an account? <Link className='text_linkk'>Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login