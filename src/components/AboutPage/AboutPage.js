import React from 'react'
import AboutSection from '../AboutSection/AboutSection'
import CtaSection from '../CtaSection/CtaSection'
import InnerHeader from '../InnerHeader/InnerHeader'
import TeamSection from '../TeamSection/TeamSection'
import TestimonialSection from '../TestimonialSection/TestimonialSection'

function AboutPage() {
    return (
        <div className='AboutPage_main'>
            <InnerHeader
                Heading="About"
            />
            <AboutSection />
            <TeamSection />
            <CtaSection />
            <TestimonialSection />
        </div>
    )
}

export default AboutPage