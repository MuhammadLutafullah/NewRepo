import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { Link } from 'react-router-dom';

import './EmptyCartPage.scss';

function EmptyCartPage() {
    return (
        <div className='EmptyCartPage_main'>
            <InnerHeader
                Heading="Empty Cart"
            />
            <div className='EmptyCart_section'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-6 col_content_otr'>
                            <div className='col_content_inr'>
                                <h2 className='heading-h2 cart_heading'>
                                    Your Shopping Cart is Empty.
                                </h2>
                                <p className='heading-mm cart_desc'>
                                    You don't have any pending transaction.
                                </p>
                                <Link className='action_otr' to="/">
                                    <ThemeBtn
                                        ButtonClass="primary_btn"
                                        ButtonText="Back to Home"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCartPage