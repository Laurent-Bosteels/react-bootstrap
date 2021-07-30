import React from "react";
import { Container } from "react-bootstrap";
import { CarouselComp } from "./components/CarouselComp";
import { Services } from "./components/Services";

export const Home = () => (
  <Container fluid={true}>

    <CarouselComp
      picture1="https://images.unsplash.com/photo-1627442000193-41657f8a2a72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1825&q=80"
      picture2="https://images.unsplash.com/photo-1627441990603-92ce0a9cfdf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3751&q=80"
      picture3="https://images.unsplash.com/photo-1627442033472-a0eea0c96f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3001&q=80"
    />

    <Services />

  </Container>
);
