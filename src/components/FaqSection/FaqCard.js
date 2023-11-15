import React from 'react'
import { Accordion } from 'react-bootstrap'
import { CaretDown } from 'phosphor-react';

import './FaqSection.scss'

function FaqCard(props) {
    return (
        <Accordion.Item className='Accordion_item' eventKey={props.KeyNum}>
            <Accordion.Header>{props.Heading} <CaretDown size={20} /></Accordion.Header>
            <Accordion.Body>
                {props.Desc}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default FaqCard