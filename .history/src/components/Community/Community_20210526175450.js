import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Community = () => {
    return (
      <Container>
        <h2>Engage with our community</h2>
        <Row>
          <Col md={12} lg={4}>
            <div engage-text>
              <p>Connect & Network with our community of thought leaders</p>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div engage-text>
              <p>Connect & Network with our community of thought leaders</p>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div engage-text>
              <p>Connect & Network with our community of thought leaders</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default Community;