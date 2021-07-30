import React from 'react'
import {Container} from 'react-bootstrap'

export const Layout = (props) => (
    <Container fluid={true} className="p-0">
        {props.children}
    </Container>
)

