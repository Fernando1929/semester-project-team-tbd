// By Yeran L Concepcion
// 10/1/2020

import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Jumbotron,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import "../App.css";


class ProfileComponent extends Component {
  emailIcon = (<i className="fab fa-user"></i>);

  render() {
    return (
      <Container>
      {/* <Row>
        <Col xs={6} md={4}>
        <Image src={process.env.PUBLIC_URL + '/HomeBackground.png'} /> 
        </Col>
        <Col xs={6} md={4}>
        <Image src={process.env.PUBLIC_URL + '/HomeBackground.png'} /> 
        </Col>
        <Col xs={6} md={4}>
          <Image src={process.env.PUBLIC_URL + '/HomeBackground.png'} /> 
        </Col>
      </Row> */}
    </Container>
    
    
    );
    }
}

export default ProfileComponent;
