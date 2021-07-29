import React from 'react'
import {Container} from 'react-bootstrap'

export const Layout = (props) => (
    <Container fluid={true} style={{ paddingLeft: 0, paddingRight: 0 }}>
        {props.children}
    </Container>
)

