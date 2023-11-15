import React from 'react'

function GalleryCard(props) {
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 GalleryCard_otr' onClick={props.CardClick}>
            <div className='GalleryCard_inr'>
                <img className='GalleryCard_img' src={props.CardImg} alt='img' />
            </div>
        </div>
    )
}

export default GalleryCard