import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Connection from './Connection';
import ArmTeleoperation from './ArmTeleoperation';

class Arm extends Component {
  state = {  }
  render() { 
    return ( 
      <Container>
      <h1 className="text-center mt-3">Arm Control Page</h1>
      <Row>
        <Col>
          <Connection />
        </Col>
      </Row>
      <Row>
        <ArmTeleoperation />
      </Row>
      </Container>
    );
  }
}
 
export default Arm;