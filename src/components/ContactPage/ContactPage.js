import React from 'react'
import ContactSection from '../ContactSection/ContactSection'
import InnerHeader from '../InnerHeader/InnerHeader'

import './ContactPage.scss'

function ContactPage() {
    return (
        <div className='ContactPage_main'>
            <InnerHeader
                Heading="Contact Us"
            />
            <ContactSection />
        </div>
    )
}

export default ContactPage