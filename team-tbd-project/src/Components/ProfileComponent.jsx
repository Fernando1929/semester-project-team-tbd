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
  Badge,
  Nav

} from "react-bootstrap";

import "../App.css";
import mainLogo from "../Images/HomeBackground.jpg";
import Image from 'react-bootstrap/Image';
import CardDeck from 'react-bootstrap/CardDeck'


class ProfileComponent extends Component {
  emailIcon = (<i className="fab fa-user"></i>);

  render() {
    return (
<Container>

<Card>
  <Card.Header>
  <Nav fill variant="tabs" defaultActiveKey="#first">
    <Nav.Item>
      <Nav.Link href="#first">General Info</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="./Settings">Teams</Nav.Link>
    </Nav.Item>
  </Nav>
  </Card.Header>
      <Row className="justify-content-center">
          
            <Card.Body>
              <Card.Text>
                <Row >
                  <Col>
                    <center>
                      <Image src={mainLogo} width="300" height="300" roundedCircle />
                      <p></p>
                      <Button variant="dark">Upload Picture</Button>
                    </center>
                  </Col>
                  <Col  className="justify-content-center">
                    <h1>
                      Job/Bachelor Title
                    </h1>
                    <h2>
                      Company/university
                    </h2>
                    <h4>
                      Department:
                    </h4>
                    <h4>
                      Location:
                    </h4>
                    <h4>
                      Bio:
                    </h4>
                  </Col>
                </Row>
                <br></br>
                
              </Card.Text>
            </Card.Body>
      </Row>
    </Card>

    </Container>
    


    );
    }
}

export default ProfileComponent;
