import React from "react";
import { useState } from "react";

import { v4 as uuid_v4 } from "uuid";

import LazyLoad from 'react-lazyload';

import { Image } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Projects = () => {
  const [projects, setProject] = useState([
    {
      title: "A Collaborative Magazine",
      details: 'BRANDING AND CAMPAIGN',
      url: "https://images.unsplash.com/photo-1627442000193-41657f8a2a72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1825&q=80",
      id: uuid_v4(),
    },
    {
      title: "An Artful Debut: First Issue",
      details: 'KUNSTFORUM INTERNATIONAL - ONLINE PRESENCE ',
      url: "https://images.unsplash.com/photo-1627441990603-92ce0a9cfdf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3751&q=80",
      id: uuid_v4(),
    },
    {
      title: "Future Shapes of Joy",
      details: 'BMW ',
      url: "https://images.unsplash.com/photo-1627442033472-a0eea0c96f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3001&q=80",
      id: uuid_v4(),
    },
    {
      title: "The detail makes the architecture",
      details: 'DALLMAR - BRAND IDENTITY',
      url: "https://images.unsplash.com/photo-1627442033472-a0eea0c96f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3001&q=80",
      id: uuid_v4(),
    },
  ]);

  return (
    <Row>
      {projects.map((project) => (
        <Col className="project-grid-item" md={6} key={project.id}>
          <LazyLoad>
           <Image className="w-100"
              src={project.url}
              alt="A lazy image"
            />
          </LazyLoad>
          <p className="text-muted project-details">{project.details}</p>
          <p className="project-title">{project.title}</p>

        </Col>
      ))}
    </Row>
  );
};