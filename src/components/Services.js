import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Services = () => (
   
   <Row className="services">
      <Col md={4}>
        <p className="text-muted">Services</p>
        Brand strategy <br/>
        Visual identity <br/>
        Digital design <br/>
        3D visualisation <br/>
        Editorial design <br/>
        Digital marketing <br/>
      </Col>

      <Col md={4}>
      <p className="text-muted">Sectors</p>
        Property <br/>
        Technology <br/>
        Professional services <br/>
      </Col>

      <Col md={4}>
      <p className="text-muted">Selected Clients</p>
        AppDirect <br/>
        Formedix <br/>
        Nest <br/>
        CB Technology <br/>
        Pasabi <br/>
        Curo <br/>
      </Col>
    </Row>
    
  );
