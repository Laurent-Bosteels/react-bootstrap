import React from "react";
import { useState } from "react";

import { v4 as uuid_v4 } from "uuid";

import { Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export const CarouselComp = () => {

  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1627442000193-41657f8a2a72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1825&q=80",
      id: uuid_v4()
    },
    {
      url: "https://images.unsplash.com/photo-1627441990603-92ce0a9cfdf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3751&q=80",
      id: uuid_v4()
    },
    {
      url: "https://images.unsplash.com/photo-1627442033472-a0eea0c96f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3001&q=80",
      id: uuid_v4()
    },
  ]);

  return (

    <Row>
      <Carousel fade controls={false}>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100"
              src={image.url}
              alt="slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Row>

  );
};
