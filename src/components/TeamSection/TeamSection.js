import React from 'react'
import SectionHeadDesc from '../SectionHeadDesc/SectionHeadDesc'
import TeamCard from './TeamCard'

import './TeamSection.scss'

import ProfileImg1 from '../../img/profile-img1.png'
import ProfileImg2 from '../../img/profile-img2.png'
import ProfileImg3 from '../../img/profile-img3.png'
import ProfileImg4 from '../../img/profile-img4.png'
import ProfileImg5 from '../../img/profile-img5.png'
import ProfileImg6 from '../../img/profile-img6.png'
import ProfileImg7 from '../../img/profile-img7.png'

function TeamSection() {
    return (
        <div className='TeamSection_main'>
            <div className='container'>
                <SectionHeadDesc
                    Heading="Our Team"
                    Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <div className='row row_custom'>
                    <TeamCard
                        CardClass="col-lg-3"
                        CardImg={ProfileImg1}
                        Name="Usman Ali"
                        Desc="Manager"
                    />
                    <TeamCard
                        CardClass="col-lg-3"
                        CardImg={ProfileImg2}
                        Name="Shahzaib"
                        Desc="Manager"
                    />
                    <TeamCard
                        CardClass="col-lg-3"
                        CardImg={ProfileImg3}
                        Name="Usman Ali"
                        Desc="Manager"
                    />
                    <TeamCard
                        CardClass="col-lg-3"
                        CardImg={ProfileImg4}
                        Name="Shahzaib"
                        Desc="Manager"
                    />
                    <TeamCard
                        CardClass="col-lg-3"
                        CardImg={ProfileImg5}
                        Name="Usman Ali"
                        Desc="Manager"
                    />
                    <TeamCard
                        CardClass="col-lg-3"
                        CardImg={ProfileImg6}
                        Name="Shahzaib"
                        Desc="Manager"
                    />
                    <TeamCard
                        CardClass="col-lg-3"
                        CardImg={ProfileImg7}
                        Name="Usman Ali"
                        Desc="Manager"
                    />
                    <TeamCard
                        CardClass="col-lg-3"
                        CardImg={ProfileImg1}
                        Name="Shahzaib"
                        Desc="Manager"
                    />
                </div>
            </div>
        </div>
    )
}

export default TeamSection