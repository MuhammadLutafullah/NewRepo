import React from 'react'
import { Phone, EnvelopeSimple } from 'phosphor-react'
import './Header.scss';

function NavbarInfo() {
    return (
        <div className='nav_info_otr'>
            <a href='tel:03236651905' className='info_linkk'>
                <Phone size={24} />
                <span className='linkk_text heading-sm'>
                    0323-6651905
                </span>
            </a>
            <a href='mailto:vistothemes@gmail.com' className='info_linkk'>
                <EnvelopeSimple size={24} />
                <span className='linkk_text heading-sm'>
                    vistothemes@gmail.com
                </span>
            </a>
        </div>
    )
}

export default NavbarInfo