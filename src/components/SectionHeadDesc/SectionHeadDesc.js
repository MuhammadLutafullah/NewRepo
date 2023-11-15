import React from 'react'

import './SectionHeadDesc.scss'

function SectionHeadDesc(props) {
    return (
        <div className='SectionHeadDesc_main'>
            <h2 className='heading-h2 sectoin_heading'>
                {props.Heading}
            </h2>
            <p className='heading-mm section_desc'>
                {props.Desc}
            </p>
        </div>
    )
}

export default SectionHeadDesc