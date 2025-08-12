import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiEclipseide, SiPostman, SiVercel, SiMicrosoft } from "react-icons/si";
import { Icon } from '@iconify/react';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide /> {/* Eclipse IDE icon */}
      </Col>
    </Row>
  );
}

export default Toolstack;
