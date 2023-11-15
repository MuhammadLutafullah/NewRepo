import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import SectionHeadDesc from '../SectionHeadDesc/SectionHeadDesc'
import FaqCard from './FaqCard';

function FaqSection() {
    return (
        <section className='FaqSection_main'>
            <div className='container'>
                <SectionHeadDesc
                    Heading="Frequently Asked Questions."
                    Desc="Here are the most asked questions and their answers. Most of the queries <br />
                        are solved by reading FAQs"
                />
                <div className='row row_custom'>
                    <div className='col-lg-8 col_accordion_otr'>
                        <div className='col_accordion_inr'>
                            <Accordion defaultActiveKey="0">
                                <FaqCard
                                    KeyNum={0}
                                    Heading="What is Lorem Ipsum?"
                                    Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                />
                                <FaqCard
                                    KeyNum={1}
                                    Heading="What is Lorem Ipsum?"
                                    Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                />
                                <FaqCard
                                    KeyNum={2}
                                    Heading="What is Lorem Ipsum?"
                                    Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                />
                                <FaqCard
                                    KeyNum={3}
                                    Heading="What is Lorem Ipsum?"
                                    Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                />
                                <FaqCard
                                    KeyNum={4}
                                    Heading="What is Lorem Ipsum?"
                                    Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                />
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection