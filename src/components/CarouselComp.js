import React from "react";
import { Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export const CarouselComp = (props) => (
  <Row>
    <Carousel noGutters fade controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.picture1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.picture2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.picture3}          
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </Row>
);
