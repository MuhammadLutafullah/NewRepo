import React from 'react'
import { Link } from 'react-router-dom';

import './InnerHeader.scss'

function InnerHeader(props) {
    return (
        <>
            <section className='InnerHeader_main'>
                <div className='container'>
                    <div className='wrapper'>
                        <h2 className='heading-h2 heading'>
                            {props.Heading}
                        </h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link to="/" className='heading-sm home_linkk'>
                                        Home
                                    </Link>
                                </li>
                                <li class="heading-sm breadcrumb-item active" aria-current="page">{props.Heading}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InnerHeader